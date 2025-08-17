export default function handler(req, res) {
  if (req.method === "GET") {
    // TODO: return list of friends
    return res.status(200).json([{ id: 1, name: "Alice" }]);
  }
  return res.status(405).json({ message: "Method Not Allowed" });
}
