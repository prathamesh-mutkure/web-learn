import { hashPassword } from "../../../helpers/auth-helper";
import { connectDatabase } from "../../../helpers/db-helper";

const handler = async (req, res) => {
  if (req.method != "POST") return;

  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .json({ message: "Email and Username are required!" });
  }

  const client = await connectDatabase();
  const db = await client.db();

  const existingUser = await db.collection("users").findOne({ email });

  if (existingUser) {
    client.close();

    return res.status(422).json({ message: "User already exists!" });
  }

  const hashedPass = await hashPassword(password);

  const result = await db.collection("users").insertOne({
    email,
    password: hashedPass,
  });

  client.close();
  return res.status(200).json({ message: "Created User" });
};

export default handler;
