import { hashPassword, verify } from "../../../helpers/auth-helper";
import { connectDatabase } from "../../../helpers/db-helper";
import { getSession } from "next-auth/client";

const handler = async (req, res) => {
  if (req.method != "PATCH") {
    return;
  }

  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized!" });
  }

  const userEmail = session.user.email;
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const client = await connectDatabase();
  const usersCollection = await client.db().collection("users");

  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    client.close();

    return res.status(404).json({ message: "User not found!" });
  }

  const currentPassword = user.password;

  const isPasswordValid = await verify(oldPassword, currentPassword);

  if (!isPasswordValid) {
    client.close();
    return res.status(403).json({ message: "Invalid password!" });
  }

  const hashedPass = await hashPassword(newPassword);

  const result = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { password: hashedPass } }
  );

  client.close();

  res.status(200).json({ message: "Password changed!" });
};

export default handler;
