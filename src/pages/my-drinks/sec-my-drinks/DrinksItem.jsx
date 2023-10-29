import { NavLink } from 'react-router-dom';
import drinks from '../sec-my-drinks/myDrinks.json';
import css from './SecMyDrinks.module.css';

export const DrinksItem = () => {
  return drinks.map((drink, index) => (
    <div key={index} className={css.drinkCard}>
      <img src={drink.drinkThumb} alt={drink.drink} className={css.drinkImage} width={335} height={360} />
      <h3 className={css.drinkName}>{drink.drink}</h3>
      <p className={css.drunkStatus}>{drink.alcoholic}</p>
      <p className={css.drinkDescr}>{drink.description}</p>
      <NavLink to="../../drink/:drinkId"className={css.seeMore}>See more</NavLink>
      <button type="button" ></button>
    </div>
  ));
};
