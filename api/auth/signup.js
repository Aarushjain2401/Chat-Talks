export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    // TODO: Save user in DB
    return res.status(201).json({ message: "User created!" });
  }
  return res.status(405).json({ message: "Method Not Allowed" });
}
