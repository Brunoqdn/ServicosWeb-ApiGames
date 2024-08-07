const { Game } = require('../models');

exports.getAllGames = async (req, res) => {
    try {
        const games = await Game.findAll();
        res.json(games);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getGameById = async (req, res) => {
    try {
        const game = await Game.findByPk(req.params.id);
        if (!game) return res.status(404).json({ message: 'Game not found' });
        res.json(game);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createGame = async (req, res) => {
    const { title, genre, release_date, developer, rating } = req.body;

    try {
        const newGame = await Game.create({ title, genre, release_date, developer, rating });
        res.status(201).json(newGame);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateGame = async (req, res) => {
    const { title, genre, release_date, developer, rating } = req.body;

    try {
        const game = await Game.findByPk(req.params.id);
        if (!game) return res.status(404).json({ message: 'Game not found' });

        game.title = title;
        game.genre = genre;
        game.release_date = release_date;
        game.developer = developer;
        game.rating = rating;

        const updatedGame = await game.save();
        res.json(updatedGame);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteGame = async (req, res) => {
    try {
        const game = await Game.findByPk(req.params.id);
        if (!game) return res.status(404).json({ message: 'Game not found' });

        await game.destroy();
        res.json({ message: 'Game deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
