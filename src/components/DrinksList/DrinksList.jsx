import { CocktailCard } from 'components/CocktailCard/CocktailCard';

import css from './DrinksList.module.css';

export default function DrinkList ({cocktails}) {
  return (
    <div className={css.container}>
      {cocktails.map(cocktail => (
        <CocktailCard mainDrinksPage={true} obj={cocktail} key={cocktail._id.$oid} />
      ))}
    </div>
  );
};
