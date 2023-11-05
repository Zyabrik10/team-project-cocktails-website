import { useEffect, useState } from 'react';
import { useGetPopularDrinksQuery } from 'redux/api/popularDrinksAPI';

import { Link } from 'react-router-dom';

import css from './PopularDrinks.module.css';
import Loader from 'components/Loader';

const PopularDrinks = () => {
  const [drinks, setDrinks] = useState([]);

  const {
    data: popularCoctails,
    isError,
    isLoading,
  } = useGetPopularDrinksQuery();

  useEffect(() => {
    if (!popularCoctails) {
      return;
    }

    const newArr = popularCoctails.sortedCocktails.slice(0, 4);
    setDrinks(newArr);
  }, [popularCoctails]);

  return isLoading ? (
    <Loader />
  ) : isError ? (
    <p> Something went wrong. Please try again!</p>
  ) : (
    <ul className={css['popular-list']}>
      {drinks.map(el => {
        const { _id, drink, description, drinkThumb } = el;

        return (
          <li key={_id} className={css['popular-item']}>
            <Link to={`/drink/${_id}`} className={css['popular-link']}>
              <div className={css['popular-img-thumb']}>
                <img
                  className={css['popular-img']}
                  src={drinkThumb}
                  alt={drink}
                />
              </div>

              <div className={css['popular-text']}>
                <p>{drink}</p>
                <p className={css['popular-descr']}>{description}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PopularDrinks;
