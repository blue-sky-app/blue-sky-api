import {
  addNewServiceCategory,
  getServiceCategories,
  getServiceCategoryWithID,
  updateServiceCategory,
  deleteServiceCategory,
} from "../controllers/serviceCategoryController.js";

const serviceCategoryRoutes = (app) => {
  app
    .route("/servicecategories")
    .get((req, res, next) => {
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getServiceCategories)

    .post(addNewServiceCategory);

  app
    .route("/serviceCategory/:serviceCategoryID")
    .get(getServiceCategoryWithID)

    .put(updateServiceCategory)

    .delete(deleteServiceCategory);
};

export default serviceCategoryRoutes;
