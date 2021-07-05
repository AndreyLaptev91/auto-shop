const express = require("express");
const products = require("./products.js");
const cors = require("cors");

const server = express();
server.use(cors());

server.get("/products", (req, res) => {
  res.json(products);
});

server.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const products = products.find((el) => el.id === +id);
  res.json(products);
});

server.listen(8000, () => {
  console.log("Server is running");
});
