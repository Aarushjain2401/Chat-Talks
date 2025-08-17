export default function handler(req, res) {
  if (req.method === "POST") {
    // TODO: Clear session / token
    return res.status(200).json({ message: "Logged out" });
  }
  return res.status(405).json({ message: "Method Not Allowed" });
}

