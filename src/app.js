const app = require("express")();

const logger = require("pino")();

logger.info("Application Executed");

app.get("/", (req, res) => {
  res.send("Hello World!");
  logger.info("Router function successfully executed.");
});

module.exports = app;
