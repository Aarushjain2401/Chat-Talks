export default function handler(req, res) {
  if (req.method === "POST") {
    const { data } = req.body;
    // TODO: Save onboarding data
    return res.status(200).json({ message: "Onboarding complete" });
  }
  return res.status(405).json({ message: "Method Not Allowed" });
}
