import express from "express";
import cors from "cors";
import logger from "./logger/logger.js";
import connection from "./db/database.js";
import ArticleRouter from "./router/ArticleRouter.js";
const app = express();
const port = 5050;

app.use(express.json());

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  }),
);

app.use("/api", ArticleRouter);

connection().then(() => {
  app.listen(port, () => {
    logger.info(`App: ${port}`);
  });
});
