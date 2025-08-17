export default function handler(req, res) {
  if (req.method === "GET") {
    // TODO: return incoming friend requests
    return res.status(200).json([{ id: 4, name: "David" }]);
  }
  return res.status(405).json({ message: "Method Not Allowed" });
}
