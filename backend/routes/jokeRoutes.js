import express from 'express';
import { getAllJokes, getJokeById, getRandomJoke } from '../controllers/jokeController.js';

const router = express.Router();

/**
 * Joke routes
 * Base path: /api/jokes
 */

// Get all jokes
router.get('/', getAllJokes);

// Get a random joke
router.get('/random', getRandomJoke);

// Get a specific joke by ID
router.get('/:id', getJokeById);

export default router;
