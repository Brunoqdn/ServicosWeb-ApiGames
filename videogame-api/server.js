const express = require('express');
const { connectDB } = require('./config/db');
const { syncDB } = require('./models');
const games = require('./routes/games'); // Certifique-se de que as rotas de jogos estão importadas
const auth = require('./routes/auth');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Conectar ao banco de dados
connectDB();
syncDB();

// Middleware
app.use(express.json());

// Rotas
app.use('/games', games); // Certifique-se de que as rotas de jogos estão configuradas
app.use('/auth', auth);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
