export default function handler(req, res) {
  if (req.method === "GET") {
    // TODO: Return current user data
    return res.status(200).json({ id: 1, username: "demoUser" });
  }
  return res.status(405).json({ message: "Method Not Allowed" });
}
