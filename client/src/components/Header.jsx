import React from 'react';

const Header = ({ jokesCount }) => {
  return (
    <header className="header">
      <h2>Dad Jokes Collection</h2>
      <div className="jokes-count">
        {jokesCount} {jokesCount === 1 ? 'Joke' : 'Jokes'} Available
      </div>
    </header>
  );
};

export default Header;
