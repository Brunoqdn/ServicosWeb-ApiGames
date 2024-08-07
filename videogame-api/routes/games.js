const express = require('express');
const router = express.Router();
const { getAllGames, getGameById, createGame, updateGame, deleteGame } = require('../controllers/gameController');
const auth = require('../middleware/auth');

// Rota para obter todos os jogos
router.get('/', getAllGames); // A rota base é /games

// Outras rotas
router.get('/:id', getGameById);
router.post('/', auth, createGame);
router.put('/:id', auth, updateGame);
router.delete('/:id', auth, deleteGame);

module.exports = router;
