import React from 'react';

export const SecMyDrinks = () => {
  const drinks = [];

  return (
    <div>
      {drinks.map((drink, index) => (
        <div key={index}>
            <img src={drink} alt={drink} />
              <h3>{drink}</h3>
              <p>{drink}</p>
              <p>{ drink}</p>
        </div>
      ))}
    </div>
  );
};
