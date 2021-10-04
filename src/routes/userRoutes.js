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
    .get((req, res, next) => {
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getUsers)

    .post(addNewUser);

  app
    .route("/user/:userID")
    .get(getUserWithID)

    .put(updateUser)

    .delete(deleteUser);

  app
    .route("/login")
    .post(login);

  app
    .route("/validateToken")
    .post(validateToken);
};

export default userRoutes;
