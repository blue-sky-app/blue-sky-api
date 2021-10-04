import {
  addNewUser,
  getUsers,
  getUserWithID,
  updateUser,
  deleteUser,
  login
} from "../controllers/userController.js";
import { validateToken, requireToken } from "../middleware/requireToken.js";

const userRoutes = (app) => {
  app
    .route("/users")
    .get(getUsers)
    .post(addNewUser);

  app
    .route("/user/:userID")
    .get(requireToken, getUserWithID)
    .put(requireToken, updateUser)
    .delete(requireToken, deleteUser);

  app
    .route("/login")
    .post(login);

  app
    .route("/validateToken")
    .post(validateToken);
};

export default userRoutes;
