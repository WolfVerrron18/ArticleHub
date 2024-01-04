import mongoose from "mongoose";

const ArticleModel = new mongoose.Schema({
  author: { type: String, required: true },
  name: { type: String, required: true },
});

export default mongoose.model("Article", ArticleModel);
