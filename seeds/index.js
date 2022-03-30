const seedPlayers = require('./player-seeds');
const seedGames = require('./game-seeds');
const seedAttendance = require('./attend-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedPlayers();
  console.log('Players Seeded');

  await seedGames();
  console.log('Games Seeded');

  await seedAttendance();
  console.log('Attendance Seeded');

  process.exit(0);
};

seedAll();