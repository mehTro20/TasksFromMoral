const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const CORS = require("cors");
const { errorHandler } = require("./errorMiddleware");
const connectDB = require("./db");
const port = process.env.PORT || 4200;

connectDB();
const app = express();

app.use(express.json());
app.use(express.raw({ extended: false }));
app.use(CORS());

app.use("/cars", require("./carRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}!!`));
