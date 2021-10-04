import {
  addNewNews,
  getNews,
  getNewsWithID,
  updateNews,
  deleteNews,
} from "../controllers/newsController.js";
import { requireToken } from "../middleware/requireToken.js";

const newsRoutes = (app) => {
  app
    .route("/news")
    .get(requireToken, getNews)
    .post(requireToken, addNewNews);

  app
    .route("/News/:NewsID")
    .get(requireToken, getNewsWithID)
    .put(requireToken, updateNews)
    .delete(requireToken, deleteNews);
};

export default newsRoutes;
