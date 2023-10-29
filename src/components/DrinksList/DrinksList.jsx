import css from './DrinksList.module.css';

export const DrinkList = ({ drinks }) => {
  return (
    <div className={css.container}>
      {drinks.map(drink => (
        <div className={css.wrapper} key={drink.id}>
          <img src="https://via.placeholder.com/400x400" alt="" />
          <h2 className={css.drinkName}>{drink.name}</h2>
        </div>
      ))}
    </div>
  );
};
