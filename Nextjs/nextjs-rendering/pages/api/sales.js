export default function getSales(req, res) {
  const sales = {
    s1: {
      username: "Jane",
      volume: 50,
    },
    s2: {
      username: "Martha",
      volume: 100,
    },
    s3: {
      username: "John",
      volume: 120,
    },
  };

  setTimeout(() => {
    return res.status(200).json(sales);
  }, 500);
}
