import css from "../../Home.module.css"

export default function OrdinaryDrink({ cocktail }) {
  return (
    <div className={css.drink}>
      <img src={cocktail.drinkThumb} alt={cocktail.drink} className={css.photo} />
      <div className={css.cocktail}>
        <h5>{cocktail.drink}</h5>
        <p className={css.more}>See more</p>
      </div>
    </div>
  );
}
