const Game = require('./game');
const User = require('./user');

const syncDB = async () => {
    await Game.sync({ alter: true });
    await User.sync({ alter: true });
};

module.exports = { syncDB, Game, User };
