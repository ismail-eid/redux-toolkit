module.exports = (app) => {
  const tutorials = require('../controllers/tutorial.controllers');
  const tutorialRouter = require('express').Router();
  // Create a tutorial
  tutorialRouter.post('/', tutorials.create);
  // Retrieve all tutorials
  tutorialRouter.get('/', tutorials.findAll);
  // Get all published tutorials;
  tutorialRouter.get('/published', tutorials.findAllPublished);
  // Get a single tutorial
  tutorialRouter.get('/:id', tutorials.findOne);
  // Update a tutorial
  tutorialRouter.put('/:id', tutorials.update);
  // Delete a tutorial
  tutorialRouter.delete('/:id', tutorials.delete);
  // Delete all tutorials
  tutorialRouter.delete('/', tutorials.deleteAll);
  // Append tutorialRouter to the global router;
  app.use('/api/tutorials', tutorialRouter);
}