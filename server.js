const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//connect to db
connectDB();

//route files
const resources = require("./routes/resources");

const app = express();

//Body Parser
app.use(express.json());

//dev loggin middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//mount routers
app.use("/api/v1/resources", resources);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode and blasting off to ${PORT} 🚀`
  )
);

//handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //close server and exit process
  server.close(() => process.exit(1));
});
