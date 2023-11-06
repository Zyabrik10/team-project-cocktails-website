import { useEffect } from 'react';
import { CocktailCard } from 'components/CocktailCard/CocktailCard';
import css from './MyDrinks.module.css';
import {
  useGetMyDrinksQuery,
  useRemoveMyDrinkMutation,
} from 'redux/api/myDrinksAPI';

export const DrinksItem = () => {

  const { data: myDrinks } = useGetMyDrinksQuery();
  const { mutate: removeMyDrink } = useRemoveMyDrinkMutation();

  useEffect(() => {
    if (!myDrinks) {
      return;
    }
    console.log(myDrinks)

  }, [myDrinks]);

  const handleRemoweMyDrink = drinkId => {
    removeMyDrink(drinkId);
  };

  return (
    <>
      {myDrinks?.map(card => (
        <li key={card._id.$oid} className={css.drinkCard}>
          <CocktailCard
            obj={card}
            id={card._id.$oid}
            handleDelete={handleRemoweMyDrink}
          />
        </li>
      ))}
    </>
  );
};
