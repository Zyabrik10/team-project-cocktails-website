import drinks from '../sec-my-drinks/myDrinks.json';
import css from './SecMyDrinks.module.css';

export const DrinksItem = () => {
  return drinks.map((drink, index) => (
    <div key={index} className={css.drinkCard}>
      <img src={drink.drinkThumb} alt={drink.drink} className={css.drinkImage} width={335} height={360} />
      <h3>{drink.drink}</h3>
      <p className={css.drunkStatus}>{drink.alcoholic}</p>
      <p >{drink.description}</p>
      <a href="../../drinks/sec-drinks"className={css.seeMore}>See more</a>
      <button type="button" ></button>
    </div>
  ));
};
