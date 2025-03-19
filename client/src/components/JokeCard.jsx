import React, { useState, useEffect } from 'react';

const JokeCard = ({ joke }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  useEffect(() => {
    // Check if the device supports touch events
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();
    window.addEventListener('touchstart', () => setIsTouchDevice(true), { once: true });
    
    return () => {
      window.removeEventListener('touchstart', () => setIsTouchDevice(true));
    };
  }, []);
  
  // Apply elevation only on non-touch devices
  const cardStyle = !isTouchDevice 
    ? {
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
      }
    : {};
  
  return (
    <div 
      className="card"
      onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
      onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
      style={cardStyle}
    >
      <h3 className="joke-title">{joke.title}</h3>
      <p className="joke-content">{joke.content}</p>
    </div>
  );
};

export default JokeCard;
