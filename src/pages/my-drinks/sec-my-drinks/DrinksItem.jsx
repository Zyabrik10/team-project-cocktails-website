import drinks from '../sec-my-drinks/myDrinks.json';
import css from './SecMyDrinks.module.css';
import { CocktailCard } from 'components/CocktailCard/CocktailCard';

export const DrinksItem = () => {
  return (
    <>
      <ul className={css.drinksList}>
        {drinks.map(card => (
          <li key={card._id.$oid} className={css.drinkCard}>
            <CocktailCard obj={card} id={card._id.$oid} />
          </li>
        ))}
      </ul>
    </>
  );
};
