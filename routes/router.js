const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipe-schema.js");

router.get("/",function (req,res) {
  Recipe.find().then(function (data) {
    res.render("view",{recipes:data});
  });
});

router.get("/add",function (req,res) {
  res.render("add");
});

router.post("/add",function (req,res) {
  let newRecipe = {
    name:req.body.name,
    prepTime:req.body.prepTime,
    cookTime:req.body.cookTime,
    steps:req.body.steps.split("\n"),
    source:req.body.source
  };
  Recipe.findOneAndUpdate({name:req.body.name}, newRecipe, {upsert:true})
  .then(function (data) {
    console.log(data);
    res.redirect("/");
  });
});

router.post("/changeRecipe",function (req,res) {
  if (req.body.edit){
    res.redirect("/edit/"+req.body.edit);
  } else {
    res.redirect("/delete/"+req.body.delete);
  }
});

router.get("/edit/:name",function (req,res) {
  Recipe.findOne({name:req.params.name}).then(function(recipe){
    res.render("add", recipe);
  });
});

router.get("/delete/:name",function (req,res) {
  Recipe.deleteOne({name:req.params.name}).then(function (data) {
    res.redirect("/");
  });
});

router.post("/ingredientEdit/:name",function (req,res) {
  let ingredients = [];
  for (var i = 0; i < req.body.length; i++) {
    ingredients.push(req.body[i]);
  }
  Recipe.update({name:req.params.name}, {$set:{ingredients: ingredients}})
  .then(function(updated){
    console.log(updated);
    res.redirect("/");
  });
});
module.exports = router;
