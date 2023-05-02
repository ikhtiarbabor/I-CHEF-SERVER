const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const cors = require('cors');
const allChef = require('./data/allChef.json');
const recipes = require('./data/Food.json');
app.use(cors());

app.get('/', (req, res) => {
  res.send(allChef);
});
app.get('/chef/:id', (req, res) => {
  const id = req.params.id;
  const chef = allChef.find((chef) => chef.id === id);
  res.send(chef);
});
app.get('/recipes/:chef_code', (req, res) => {
  const chef_code = req.params.chef_code;
  const chef = allChef.find((chef) => chef.id === chef_code);
  console.log(chef);
  const chefRecipes = recipes.filter(
    (recipe) => recipe.chef_code === chef_code
  );
  const chefAndFood = [chef, ...chefRecipes];
  res.send(chefAndFood);
});
app.listen(port);
