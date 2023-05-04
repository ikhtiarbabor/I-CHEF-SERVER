const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const cors = require('cors');
const allChef = require('./data/allChef.json');
const recipes = require('./data/Food.json');
const allCategory = require('./data/Category.json');
console.log(allCategory);
app.use(cors());

app.get('/', (req, res) => {
  res.send(allChef);
});
app.get('/chef/:id', (req, res) => {
  const id = req.params.id;
  const chef = allChef.find((chef) => chef.id === id);
  res.send(chef);
});
app.get('/recipes', (req, res) => {
  res.send(recipes);
});
app.get('/recipes/:chef_code', (req, res) => {
  const chef_code = req.params.chef_code;
  const chefRecipes = recipes.filter(
    (recipe) => recipe.chef_code === chef_code
  );
  res.send(chefRecipes);
});

app.get('/recipes/category', (req, res) => {
  console.log(allCategory);
  res.send(allCategory);
});

app.get('/recipes/category/:category', (req, res) => {
  const category = req.params.category;
  const categoryRecipe = recipes.filter(
    (recipe) => recipe.strCategory === category
  );
  res.send(categoryRecipe);
});

app.listen(port);
