import { addNewEstimate, 
    getEstimates, 
    getEstimateWithID, 
    updateEstimate, 
    deleteEstimate } from '../controllers/estimatesController';

const estimateRoutes = (app) => {
app.route('/estimates')
    .get((req, res, next) => {
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getEstimates)

    .post(addNewEstimate);

app.route('/estimate/:estimateID')
    .get(getEstimateWithID)

    .put(updateEstimate)
    
    .delete(deleteEstimate);
}

export default estimateRoutes;