const express = require('express');
const routes = require('./routes');

// Import Sequelize connection
const sequelize = require('./config/connection');

// Initialize Express application
const initExpressApp = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routes);

  return app;
};

const PORT = process.env.PORT || 3001;

const startServer = async (port) => {
  const app = initExpressApp();

  // Sync Sequelize models to the database, then turn on the server
  try {
    await sequelize.sync({ force: false });
    app.listen(port, () => {
      console.log(`App listening on port ${port}!`);
    });
  } catch (err) {
    console.error('Unable to sync the database:', err);
  }
};

startServer(PORT);
