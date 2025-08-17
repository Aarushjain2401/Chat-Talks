export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === "POST") {
    // TODO: send friend request to userId = id
    return res.status(200).json({ message: `Friend request sent to ${id}` });
  }
  return res.status(405).json({ message: "Method Not Allowed" });
}
