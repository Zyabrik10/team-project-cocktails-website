import { useState } from 'react';
import { CocktailCard } from 'components/CocktailCard/CocktailCard';
import drinks from '../sec-my-drinks/myDrinks.json';
import css from './SecMyDrinks.module.css';

export const DrinksItem = () => {
  const [cocktails, setCocktails] = useState([]);

  const handleDelete = cocktailId => {
    const updatedCocktails = cocktails.filter(
      cocktail => cocktail._id.$oid !== cocktailId
    );
    setCocktails(updatedCocktails);
  };

  return (
    <>
      {drinks.map(card => (
        <div key={card._id.$oid} className={css.drinkCard}>
          <CocktailCard
            obj={card}
            id={card._id.$oid}
            handleDelete={handleDelete}
          />
        </div>
      ))}
    </>
  );
};
