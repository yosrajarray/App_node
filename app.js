const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Bienvenue sur l'API Node.js CI/CD sécurisée !" });
});

app.post('/add', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a + b });
});

app.listen(3000, () => console.log("Server running on port 3000"));
module.exports = app;
