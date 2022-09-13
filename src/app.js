import express from "express";
import cors from "cors";
import { default as logger } from "morgan";
import ccqp from "ccqp";

import { default as indexRouter } from "./indexRouter.js";
import { sequelize } from "./models/index.js";

const NODE_ENV = process.env.NODE_ENV;
const loggerSet = {
  development: "dev",
  production: "combined",
};
const loggerOption = loggerSet[NODE_ENV];

const app = express();

if (NODE_ENV !== "test") {
  sequelize
    .sync({ force: false })
    .then(() => console.log("Connected Database"))
    .catch((err) => console.error("Database Coneecting Error: ", err));
}

app.use(cors());
app.use(logger(loggerOption));
app.use(ccqp);
app.use(indexRouter);

export default app;
