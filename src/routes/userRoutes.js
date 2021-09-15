import {
  addNewUser,
  getUsers,
  getUserWithID,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

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
};

export default userRoutes;
