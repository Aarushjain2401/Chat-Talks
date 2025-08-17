export default function handler(req, res) {
  if (req.method === "GET") {
    // TODO: return outgoing friend requests
    return res.status(200).json([{ id: 3, name: "Charlie" }]);
  }
  return res.status(405).json({ message: "Method Not Allowed" });
}
