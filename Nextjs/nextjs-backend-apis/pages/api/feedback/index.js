import fs from "fs";
import path from "path";

export const getPath = () => {
  return path.join(process.cwd(), "data", "feedback.json");
};

export const getData = (path) => {
  const fileData = fs.readFileSync(path);
  const data = JSON.parse(fileData);

  return data;
};

export default function handler(req, res) {
  const { method } = req;

  if (method == "GET") {
    const path = getPath();
    const feedbackData = getData(path);

    return res.status(200).json({ feedback: feedbackData });
  } else if (method == "POST") {
    const { email, feedback } = req.body;
    const path = getPath();
    const data = getData(path);

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    data.push(newFeedback);
    fs.writeFileSync(path, JSON.stringify(data));

    return res.status(200).json({ message: "Success", feedback: data });
  } else {
    res.status(200).json({ error: "Invalid Method" });
  }
}
