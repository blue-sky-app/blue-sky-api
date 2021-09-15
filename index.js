import express from "express";
import userRoutes from "./src/routes/userRoutes.js";
import serviceCategoryRoutes from "./src/routes/serviceCategoryRoutes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import newsRoutes from "./src/routes/newsRoutes.js";
import estimatesRoute from "./src/routes/estimatesRoutes.js";
import cors from "cors";

const app = express();
//mongoose connection
mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb+srv://admin:rootadmin@cluster0.wt8ns.mongodb.net/blueskydb?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const uri = process.env.MONGODB_URI;

// app.use(
//   cors({
//     Origin: "http://localhost:3000",
//   })
// );

app.use(
  cors({
    Origin: "https://blueskyappv1.netlify.app",
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
  res.send(`Node and express server running on port 4000}`)
);

app.listen(process.env.PORT || 4000, () =>
  console.log(`Server is running on port 4000`)
);
