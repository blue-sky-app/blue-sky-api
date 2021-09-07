import { addNewNews, 
    getNews, 
    getNewsWithID, 
    updateNews, 
    deleteNews } from '../controllers/newsController';

const newsRoutes = (app) => {
app.route('/news')
    .get((req, res, next) => {
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getNews)

    .post(addNewNews);

app.route('/News/:NewsID')
    .get(getNewsWithID)

    .put(updateNews)
    
    .delete(deleteNews);
}

export default newsRoutes;