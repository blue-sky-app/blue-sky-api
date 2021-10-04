import {
  addNewEstimate,
  getEstimates,
  getEstimateWithID,
  updateEstimate,
  deleteEstimate,
} from "../controllers/estimatesController.js";
import { requireToken } from "../middleware/requireToken.js";

const estimateRoutes = (app) => {
  app
    .route("/estimates")
    .get(requireToken, getEstimates)
    .post(requireToken, addNewEstimate);

  app
    .route("/estimate/:estimateID")
    .get(requireToken, getEstimateWithID)
    .put(requireToken, updateEstimate)
    .delete(requireToken, deleteEstimate);
};

export default estimateRoutes;
