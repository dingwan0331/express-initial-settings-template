import express from "express";
import cors from "cors";
import { default as logger } from "morgan";
import ccqp from "ccqp";

import { default as indexRouter } from "./indexRouter.js";
import { errorResponder } from "./middlewares/errorHandlers.js";

const NODE_ENV = process.env.NODE_ENV;
const loggerSet = {
  development: "dev",
  production: "combined",
};
const loggerOption = loggerSet[NODE_ENV];

const app = express();

app.use(cors());
app.use(logger(loggerOption));
app.use(ccqp);
app.use(indexRouter);
app.use(errorResponder);

export default app;
