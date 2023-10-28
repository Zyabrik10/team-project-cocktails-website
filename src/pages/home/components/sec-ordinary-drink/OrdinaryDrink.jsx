import { Link } from 'react-router-dom';
import css from "../../Home.module.css"

export default function OrdinaryDrink({ cocktail }) {
  return (
    <div className={css.drink}>
      <img src={cocktail.drinkThumb} alt={cocktail.drink} />
      <div>
        <h5>{cocktail.drink}</h5>
        <Link>See more</Link>
      </div>
    </div>
  );
}
