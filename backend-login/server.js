const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./backend/errorMiddleware");
const connectDB = require("./backend/connectDB");
const port = process.env.PORT || 3050;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./backend/routes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}!!!`));
