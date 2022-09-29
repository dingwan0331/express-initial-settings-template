import express from "express";
import cors from "cors";
import { default as logger } from "morgan";
import ccqp from "ccqp";
import dotenv from "dotenv";

import { default as indexRouter } from "./indexRouter.js";
import { errorResponder } from "./middlewares/errorHandlers.js";
import { NotFoundError } from "./utils/errors.js";

dotenv.config();

const NODE_ENV = process.env.NODE_ENV;
const loggerSet = {
  development: "dev",
  production: "combined",
};
const loggerOption = loggerSet[NODE_ENV];

const notFoundMiddleware = (req, res, next) => {
  const err = new NotFoundError();
  next(err);
};

const app = express();

app.use(cors());
app.use(logger(loggerOption));
app.use(ccqp);

app.use(indexRouter);
app.use(notFoundMiddleware);

app.use(errorResponder);

export default app;
