import { connectDatabase, insertDocument } from "../../helpers/db-utils";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email } = req.body;

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: "Connecting to the database failed!" });
    }

    try {
      await insertDocument(client, "newsletter", { email: userEmail });
      client.close();
    } catch (error) {
      return res.status(500).json({ error: "Inserting data failed!" });
    }

    return res.status(200).json({ message: "Signed Up!" });
  } else if (req.method === "GET") {
    // TODO: Get email list

    return res.status(200).json({ emails: [] });
  }
};

export default handler;
