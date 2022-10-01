import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verify } from "../../../helpers/auth-helper";
import { connectDatabase } from "../../../helpers/db-helper";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      authorize: async (credentials) => {
        const client = await connectDatabase();
        const userCollection = await client.db().collection("users");

        const user = await userCollection.findOne({ email: credentials.email });

        if (!user) {
          client.close();
          throw new Error("The user does not exists!");
        }

        const isVerified = await verify(credentials.password, user.password);

        if (!isVerified) {
          client.close();
          throw new Error("Incorrect credentials!");
        }

        return {
          email: user.email,
        };
      },
    }),
  ],
});
