import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(1, "10 m"),
  analytics: true,
  prefix: "@upstash/twitter-clone",
});

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 100,
      orderBy: {
        createdAt: "desc",
      },
    });

    const users = await clerkClient.users.getUserList({
      userId: posts.map((post) => post.userId),
      limit: 100,
    });

    const filteredUsers = users.map((user) => ({
      id: user.id,
      username: user.username,
      imageUrl: user.imageUrl,
      firstName: user.firstName,
      lastName: user.lastName,
    }));

    return posts.map((post) => ({
      post,
      user: filteredUsers.find((user) => user.id === post.userId)!,
    }));
  }),

  createPost: privateProcedure
    .input(
      z.object({
        content: z.string().emoji("You can only post emojis").min(1).max(20),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { success } = await ratelimit.limit(ctx.currentUserId);

      if (!success) {
        return new TRPCError({
          code: "TOO_MANY_REQUESTS",
          message: "Limit exceeded, please try again later!",
        });
      }

      const post = await ctx.prisma.post.create({
        data: {
          content: input.content,
          userId: ctx.currentUserId,
        },
      });

      return post;
    }),
});
