import css from "../Home.module.css"
import { CocktailCard } from 'components/CocktailCard/CocktailCard';

export default function DrinkGroup ({ group, cocktails }) {
  return (
    <div className={css.cocktailCard}>
      <h3 className={css.categoryName}>{group}</h3>
      <div className={css.groupCard}>
        {cocktails.map(cocktail => (
          <CocktailCard mainDrinksPage obj={cocktail} key={cocktail._id}/>
        ))}
      </div>
    </div>
  );
};
