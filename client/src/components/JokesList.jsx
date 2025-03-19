import React from 'react';
import JokeCard from './JokeCard';

const JokesList = ({ jokes }) => {
  if (!jokes.length) {
    return <p className="no-jokes">No jokes available</p>;
  }

  return (
    <div className="jokes-container">
      {jokes.map((joke) => (
        <JokeCard key={joke.id} joke={joke} />
      ))}
    </div>
  );
};

export default JokesList;
