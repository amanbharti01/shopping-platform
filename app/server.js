const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "shopping-platform"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Shopping platform running on port ${PORT}`);
});
