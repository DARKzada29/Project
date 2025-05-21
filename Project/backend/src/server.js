require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

// Inicializar app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
  console.log("✅ Conectado ao MongoDB Atlas!");
}).catch((err) => {
  console.error("❌ Erro ao conectar ao MongoDB:", err);
});

// Rotas
app.use('/api/users', userRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
