const router = require('express').Router();
let Recipe = require('../models/recipe.model');

// Get all recipes; GET request
router.route('/').get((req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a recipe; POST request
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const recipeName = req.body.recipeName;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date); 
    const newRecipe = new Recipe({
        username,
        recipeName,
        description,
        duration,
        date,
    }); 
    newRecipe.save()
    .then(() => res.json('Recipe added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get recipe by ID(provided by Mongo); GET request
router.route('/:id').get((req, res) => {
    Recipe.findById(req.params.id)
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete recipe by ID; DELETE request
router.route('/:id').delete((req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
        .then(() => res.json('Recipe deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Edit recipe; POST request - must input all fields
router.route('/update/:id').post((req, res) => {
    Recipe.findById(req.params.id)
        .then(recipes => {

            recipes.username = req.body.username;
            recipes.recipeName = req.body.recipeName;
            recipes.description = req.body.description;
            recipes.duration = Number(req.body.duration);
            recipes.date = Date.parse(req.body.date);

            recipes.save()
                .then(() => res.json('Recipe updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;