import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

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
        content: z.string().emoji().min(1).max(20),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.prisma.post.create({
        data: {
          content: input.content,
          userId: ctx.currentUserId,
        },
      });

      return post;
    }),
});
