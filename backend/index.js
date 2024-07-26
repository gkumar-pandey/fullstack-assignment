import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./config/connectDb.js";
import routes from "./routes/index.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());
app.use(helmet());

const PORT = process.env.PORT || 6969;

// const allowedOrigins = ["http://localhost:3000"];

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (allowedOrigins.includes(origin) || !origin) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//   })
// );

connectDB();

app.use("/", routes);

// //404 error handler
// app.use(error404Handler);
// // Global error handler
// app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running at PORT:3000");
});
