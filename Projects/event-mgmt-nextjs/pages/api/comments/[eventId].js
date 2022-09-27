import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../../helpers/db-utils";

const dummyComments = [
  {
    id: 1,
    email: "john@gmail.com",
    name: "John Doe",
    text: "Hello World!",
  },
  {
    id: 2,
    email: "jane@gmail.com",
    name: "Jane Doe",
    text: "Hello Next.js!",
  },
];

const handler = async (req, res) => {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Connecting to the database failed!" });
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "comments", { _id: -1 });
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ error: "Getting comments failed." });
    }
  } else if (req.method === "POST") {
    const { email, name, text } = req.body;
    const { eventId } = req.query;

    const newComment = {
      eventId,
      email,
      name,
      text,
    };

    let result;

    try {
      result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: "Added comment.", comment: newComment });
    } catch (error) {
      res.status(500).json({ error: "Inserting comment failed!" });
    }

    client.close();
  }
};

export default handler;
