import express from "express";
import userRoutes from "./src/routes/userRoutes.js";
import serviceCategoryRoutes from "./src/routes/serviceCategoryRoutes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import newsRoutes from "./src/routes/newsRoutes.js";
import estimatesRoute from "./src/routes/estimatesRoutes.js";
import cors from "cors";

const app = express();
const PORT = 4000;

//mongoose connection
mongoose.Promise = global.Promise;

// dev
// mongoose.connect('mongodb+srv://admin:rootadmin@cluster0.wt8ns.mongodb.net/blueskydb', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

//prod
mongoose.connect(
  "mongodb+srv://admin:rootadmin@cluster0.wt8ns.mongodb.net/blueskydb?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const uri = process.env.MONGODB_URI;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
userRoutes(app);
serviceCategoryRoutes(app);
newsRoutes(app);
estimatesRoute(app);

app.get("/", (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
