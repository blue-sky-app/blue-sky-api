import express from 'express';
import userRoutes from './src/routes/userRoutes';
import serviceCategoryRoutes from './src/routes/serviceCategoryRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express()
const PORT = 4000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:rootadmin@cluster0.wt8ns.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// cors setup
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000',
}));

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

userRoutes(app);
serviceCategoryRoutes(app);

app.get('/', (req, res) =>
    res.send (`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
