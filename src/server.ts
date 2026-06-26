import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    status: "online",
    project: "Dal Zilio AI",
    version: "0.1.0",
    message: "🚴 Ready to build"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});