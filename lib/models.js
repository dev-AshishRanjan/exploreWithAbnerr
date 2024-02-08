import mongoose from "mongoose";
import connectToDb from "./db";

(async () => {
  await connectToDb();
})();

const gallerySchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "Url must be included"],
  },
  category: {
    type: String,
    required: [true, "An image must have a category"],
    enum: {
      values: ["Winter", "Ambience", "Golden Hour"],
      message: "Category must be either Winter, Ambience or Golden Hour",
    },
  },
});

const articleImage = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "Url must be included"],
  },
});

const article = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "An article must have a title"],
  },
  description: {
    type: String,
  },
  coverImage: {
    type: mongoose.Types.ObjectId,
    ref: "ArticleImage",
  },
  otherImages: {
    type: [mongoose.Types.ObjectId],
    ref: "ArticleImage",
  },
});

export const Gallery =
  mongoose.models.Gallery || mongoose.model("Gallery", gallerySchema);

export const ArticleImage =
  mongoose.models.ArticleImage || mongoose.model("ArticleImage", articleImage);

export const Article =
  mongoose.models.Article || mongoose.model("Article", article);
