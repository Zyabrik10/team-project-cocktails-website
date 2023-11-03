import { useEffect, useState } from 'react';
import { useGetPopularDrinksQuery } from 'redux/api/popularDrinksAPI';

const PopularDrinks = () => {
  const [drinks, setDrinks] = useState([]);

  const {
    data: popularCoctails,
    isLoading,
    // isError,
    // error,
  } = useGetPopularDrinksQuery();

  useEffect(() => {
    if (!popularCoctails) {
      return;
    }

    const newArr = popularCoctails.sortedCocktails.slice(0, 4);
    setDrinks(newArr);
  }, [popularCoctails]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <ul>
      {drinks.map(el => {
        const { _id, drink, description, drinkThumb } = el;

        return (
          <li key={_id}>
            <img src={drinkThumb} alt={drink} width="90" height="90" />
            <div>
              <p>{drink}</p>
              <p>{description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default PopularDrinks;
