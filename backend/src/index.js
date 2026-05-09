const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Route de test
app.get('/', (req, res) => {
  res.json({ message: '✅ Serveur web-hoster opérationnel !' });
});

// Routes (on les ajoutera après)
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/sites', require('./routes/sites'));

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});