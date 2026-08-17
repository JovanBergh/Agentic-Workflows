const app = require("./app.js");
const port = 5555;

const logger = require("pino")();

app.listen(port, () => {
  logger.info(`Example app listening on port ${port}`);
});
