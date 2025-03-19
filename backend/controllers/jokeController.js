import { jokes } from '../data/jokesData.js';

/**
 * Get all jokes
 * @route GET /api/jokes
 * @access Public
 */
export const getAllJokes = (req, res, next) => {
  try {
    res.json(jokes);
  } catch (error) {
    next(error);
  }
};

/**
 * Get joke by ID
 * @route GET /api/jokes/:id
 * @access Public
 */
export const getJokeById = (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid joke ID format' });
    }
    
    const joke = jokes.find(joke => joke.id === id);
    
    if (!joke) {
      return res.status(404).json({ message: 'Joke not found' });
    }
    
    res.json(joke);
  } catch (error) {
    next(error);
  }
};

/**
 * Get a random joke
 * @route GET /api/jokes/random
 * @access Public
 */
export const getRandomJoke = (req, res, next) => {
  try {
    if (jokes.length === 0) {
      return res.status(404).json({ message: 'No jokes available' });
    }
    
    const randomIndex = Math.floor(Math.random() * jokes.length);
    res.json(jokes[randomIndex]);
  } catch (error) {
    next(error);
  }
};
