const connection = require('../config/connection');
const User = require('../models/User');
const Reaction = require('../models/Reaction')
const { getRandomName, getRandomUserName, getRandomReaction } = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Empty arrays for randomly generated users
  const users = [];

  for (let i = 0; i < 10; i++) {
    const reactions = getRandomReaction([i]);
    const newUser = {
      username: getRandomUserName(),
      email: `${username}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}@gmail.com`,
      reaction: reactions,
    };
    users.push({newUser});
  }

  // Wait for the users to be inserted into the database
  await User.collection.insertMany(users);

  console.table(users);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});