// import recipes from "../recipes.json"
import OrdinaryDrink from './sec-ordinary-drink/OrdinaryDrink';
import css from "../Home.module.css"

export default function DrinkGroup ({ group, cocktails }) {
  return (
    <div >
      <h3 className={css.categoryName}>{group}</h3>
      <div className={css.groupCard}>
        {cocktails.map(cocktail => (
          <OrdinaryDrink cocktail={cocktail} key={cocktail._id.$oid} />
        ))}
      </div>
    </div>
  );
};
