const asyncHandler = require("express-async-handler");
// const { restart } = require("nodemon");

const Car = require("./carModel");

const getCars = asyncHandler(async (req, res) => {
  const cars = await Car.find();
  console.log("Get req done");
  return res.status(200).json(cars);
});

const createCar = asyncHandler(async (req, res) => {
  const data = req.body.form;
  if (!data) {
    console.log(data);
    console.log("Nope!!");
    res.status(400);
    throw new Error("Error message");
  }

  const cars = await Car.create({
    brand: data.brand,
    color: data.color,
    problems: data.issues,
  });
  console.log(cars);
  res.status(200).json(cars);
});

module.exports = {
  getCars,
  createCar,
};
