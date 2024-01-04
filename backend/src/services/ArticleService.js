/** @module Model - Модель статьи */
import ArticleModel from "../models/ArticleModel.js";

import { enumSort } from "../shared/enum.js";

/** @class ArticleService - Сервис по работе со статьями */
class ArticleService {
  /** @method
   * @name create - Создание статьи
   * @param article - Объект статьи */
  async create(article) {
    return ArticleModel.create(article);
  }

  /** @method
   * @name get - Получение статьи
   * @param id - Идентификатор статьи */
  async get(id) {
    return ArticleModel.findById(id);
  }

  /** @method
   * @name getAll - Получение cписка всех статей */
  async getAll(query) {
    return ArticleModel.find()
      .sort()
      .limit();
  }

  /** @method
   * @name remove - Удаление статьи
   * @param id - Идентификатор статьи */
  async remove(id) {
    return ArticleModel.findByIdAndDelete(id);
  }
}

export default new ArticleService();
