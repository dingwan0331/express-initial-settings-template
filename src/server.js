import http from "http";
import { SERVER_PORT } from "./config/index.js";
import app from "./app.js";

const server = http.createServer(app);

const serverStart = () => {
  try {
    server.listen(SERVER_PORT, () => {
      console.log(`listening on ${SERVER_PORT}!`);
    });
  } catch (err) {
    console.error(err);
  }
};

serverStart();
