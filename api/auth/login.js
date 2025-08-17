export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    // TODO: Authenticate user
    return res.status(200).json({ message: "Login successful" });
  }
  return res.status(405).json({ message: "Method Not Allowed" });
}
