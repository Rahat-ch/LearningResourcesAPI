const express = require("express");
const dotenv = require("dotenv");

//route files
const resources = require("./routes/resources");

//Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

app.use("/api/v1/resources", resources);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode and blasting off to ${PORT} 🚀`
  )
);
