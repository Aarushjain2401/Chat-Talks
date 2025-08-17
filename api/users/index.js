export default function handler(req, res) {
  if (req.method === "GET") {
    // TODO: return list of recommended users
    return res.status(200).json([{ id: 2, name: "Bob" }]);
  }
  return res.status(405).json({ message: "Method Not Allowed" });
}
