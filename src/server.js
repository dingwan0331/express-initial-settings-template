import http from "http";
import { SERVER_PORT } from "./config/index.js";
import app from "./app.js";
/* DB import
import { sequelize } from "./models/index.js";
*/
const server = http.createServer(app);

const serverStart = () => {
  try {
    /* DB connect
    sequelize
      .sync({ force: false })
      .then(() => console.log("Connected Database"))
      .catch((err) => console.error("Database Coneecting Error: ", err));
    */
    server.listen(SERVER_PORT, () => {
      console.log(`listening on ${SERVER_PORT}!`);
    });
  } catch (err) {
    console.error(err);
  }
};

serverStart();
