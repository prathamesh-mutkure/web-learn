import { Post } from "@prisma/client";
import { Context } from "..";

interface PostArgs {
  post: {
    title?: string;
    content?: string;
  };
}

interface PostPayloadType {
  userErrors: {
    message: string;
  }[];
  post: Post;
}

export const Mutation = {
  postCreate: async (
    _: any,
    { post: { title, content } }: PostArgs,
    { prisma }: Context
  ): Promise<PostPayloadType> => {
    if (!title || !content) {
      return {
        userErrors: [{ message: "Title and Content are required!" }],
        post: null,
      };
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId: 1,
      },
    });

    return {
      userErrors: [],
      post,
    };
  },

  postUpdate: async (
    _: any,
    { postId, post }: { postId: string; post: PostArgs["post"] },
    { prisma }: Context
  ): Promise<PostPayloadType> => {
    const { title, content } = post;

    if (!title && !content) {
      return {
        userErrors: [
          { message: "At least one field is required to update the post" },
        ],
        post: null,
      };
    }

    const existingPost = await prisma.post.findUnique({
      where: {
        id: Number(postId),
      },
    });

    if (!existingPost) {
      return {
        userErrors: [{ message: "Post does not exists" }],
        post: null,
      };
    }

    const dataToUpdate = { title, content };

    if (!title) delete dataToUpdate.title;
    if (!content) delete dataToUpdate.content;

    const newPost = await prisma.post.update({
      data: { ...dataToUpdate },
      where: {
        id: Number(postId),
      },
    });

    return {
      userErrors: [],
      post: newPost,
    };
  },

  postDelete: async (
    _: any,
    { postId }: { postId: string },
    { prisma }: Context
  ): Promise<PostPayloadType> => {
    const existingPost = await prisma.post.findUnique({
      where: {
        id: Number(postId),
      },
    });

    if (!existingPost) {
      return {
        userErrors: [{ message: "Post does not exists" }],
        post: null,
      };
    }

    await prisma.post.delete({
      where: {
        id: Number(postId),
      },
    });

    return {
      userErrors: [],
      post: existingPost,
    };
  },
};
