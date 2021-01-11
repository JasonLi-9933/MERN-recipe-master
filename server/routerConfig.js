const express = require("express");
const RecipeControl = require('./recipeControllor');
const router = express.Router();

router.post('/add/:id', RecipeControl.addRecipe);
router.get('/fetch-recipes/:id', RecipeControl.getRecipes);
router.post('/delete/:id', RecipeControl.deleteRecipe);
// router.get('/test/:id', RecipeControl.testMethod);

module.exports = router;