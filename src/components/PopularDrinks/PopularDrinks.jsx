import { useEffect, useState } from 'react';
import { useGetPopularDrinksQuery } from 'redux/api/popularDrinksAPI';

const PopularDrinks = () => {
  const [drinks, setDrinks] = useState([]);

  const {
    data: selects,
    isLoading,
    // isError,
    // error,
  } = useGetPopularDrinksQuery();

  useEffect(() => {
    if (!selects) {
      return;
    }

    const newArr = selects.slice(0, 4);
    setDrinks(newArr);
  }, [selects]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <ul>
      {drinks.map(el => {
        const { id, drink, description, drinkThumb } = el;

        return (
          <li key={id}>
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
