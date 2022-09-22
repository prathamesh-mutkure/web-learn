import { getData, getPath } from ".";

const handler = (req, res) => {
  const { feedbackId } = req.query;

  const path = getPath();
  const data = getData(path);

  const feedback = data.find((fb) => fb.id === feedbackId);

  if (!feedback) {
    return res.status(404).json({ error: "Feedback not found!" });
  }

  res.status(200).json(feedback);
};

export default handler;
