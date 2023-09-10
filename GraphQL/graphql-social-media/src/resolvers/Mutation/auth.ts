import { Context } from "../..";

interface SignupArgs {
  name: string;
  email: string;
  password: string;
  bio: string;
}

export const authResolvers = {
  signup: async (
    _: any,
    { name, email, password, bio }: SignupArgs,
    { prisma }: Context
  ) => {
    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password,
        },
      });

      return user;
    } catch (e) {
      console.log(e);
    }
  },
};
