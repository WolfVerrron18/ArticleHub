import Router from "express";
import ArticleController from "../controllers/ArticleController.js";

const ArticleRouter = new Router();

ArticleRouter.get("/article/:id", ArticleController.get);
ArticleRouter.get("/article", ArticleController.getAll);
ArticleRouter.post("/article", ArticleController.create);
ArticleRouter.delete("/article/:id", ArticleController.remove);

export default ArticleRouter;
