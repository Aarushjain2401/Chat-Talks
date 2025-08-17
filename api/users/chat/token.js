export default function handler(req, res) {
  if (req.method === "GET") {
    // TODO: return Stream Chat token or other chat token
    return res.status(200).json({ token: "fake-token-123" });
  }
  return res.status(405).json({ message: "Method Not Allowed" });
}
