const express = require("express");
const {
  getAllController,
  getRecipe,
  newRecipe,
  deleteRecipe,
} = require("./controller/recipeController.js");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.route("/api/recipe").get(getAllController).post(newRecipe);
app.route("/api/recipe/:id").get(getRecipe).delete(deleteRecipe);
app.listen(2323, () => {
  console.log("2323. port dinleniyor");
});
