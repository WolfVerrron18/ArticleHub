import ArticleService from "../services/ArticleService.js";

class ArticleController {
  async create(req, res) {
    try {
      const article = await ArticleService.create(req.body);

      res.json(article);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async get(req, res) {
    try {
      const foundArticle = await ArticleService.get(req.params.id);

      res.json(foundArticle);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const articles = await ArticleService.getAll(req.query);

      res.json(articles);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async remove(req, res) {
    try {
      await ArticleService.remove(req.params.id);

      res.status(200);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new ArticleController();
