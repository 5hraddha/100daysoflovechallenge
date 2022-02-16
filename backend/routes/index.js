/**
 * Map all the routers to their respective main routes.
 * @module routes/index.js
 */
const twitterRouter = require('./twitter');

module.exports = (app) => {
  app.use('/api', twitterRouter);
};