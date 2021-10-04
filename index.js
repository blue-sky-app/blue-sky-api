import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoutes from "./src/routes/userRoutes.js";
import serviceCategoryRoutes from "./src/routes/serviceCategoryRoutes.js";
import newsRoutes from "./src/routes/newsRoutes.js";
import estimatesRoute from "./src/routes/estimatesRoutes.js";
import { logRequest } from "./src/middleware/logger.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;
const dbUri = process.env.MONGODB_URI || "mongodb+srv://admin:rootadmin@cluster0.wt8ns.mongodb.net/blueskydb?retryWrites=true&w=majority";
const corsOrigins = process.env.CORS_ORIGINS || "/\./";

// Setup mongoose db
mongoose.Promise = global.Promise;
mongoose.connect(
  dbUri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(
  cors({
    Origin: corsOrigins,
  })
);

// Bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup logging
app.use(logRequest);

// Add Routes
userRoutes(app);
serviceCategoryRoutes(app);
newsRoutes(app);
estimatesRoute(app);

app.get("/", (req, res) =>
  res.send(`Node and express server running on port ${port}`)
);

app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);
