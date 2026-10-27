import express from "express";
import path from "node:path";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));

app.get("/api/status", (req, res) => {
  res.json({
    status: "online",
    project: "Dal Zilio AI",
    version: "0.1.0",
    message: "🚴 Ready to build"
  });
});

// Iscrizioni "Avvisami" per il lancio Pinarello (in memoria per ora).
const subscribers = new Set<string>();

app.post("/api/notify", (req, res) => {
  const email = String(req.body?.email ?? "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ ok: false, error: "Email non valida" });
    return;
  }
  subscribers.add(email);
  console.log(`Nuova iscrizione: ${email} (totale ${subscribers.size})`);
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
