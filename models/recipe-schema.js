const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = require("bluebird");
mongoose.connect("mongodb://localhost:27017/mongoose");

const recipeSchema = new Schema({
  name: {type:String, required:true, unique:true},
  prepTime: Number,
  cookTime: Number,
  ingredients: [String],
  steps: [String],
  source: String
});

recipeSchema.virtual("allSteps").get(function () {
  return this.steps.join("\n");
});

recipeSchema.virtual("allIngredients").get(function () {
  return this.ingredients.join("\n");
});

const Recipe = mongoose.model("Recipes", recipeSchema);

module.exports = Recipe;
