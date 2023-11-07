import globalCss from '../../../css/global.module.css';
import css from './Hero.module.css';
import { Title } from 'components/Title/Title';

import favoritesAPI from 'redux/api/favoritesAPI';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Hero = ({ signleDrink }) => {
  const { drinkId } = useParams();
  const [favorites, setFavorites] = useState(null);
  const [addFavorite] = favoritesAPI.useAddFavoriteMutation();
  const [removeFavorite] = favoritesAPI.useRemoveFavoriteMutation();

  const [isAdded, setIsAdded] = useState(false);
  const { data: favoritesArray } = favoritesAPI.useGetFavoritesQuery();

  // add or remove cocktail from the favorites
  const handleClick = async () => {
    //remove cocktail
    if (isAdded) {
      try {
        const response = await removeFavorite({
          id: signleDrink._id,
        });
        console.log('Removed Drink response while Removing', response);

        if (response.error) {
          console.log('Error message', response.error.data.message);
        } else {
          console.log('REMOVE cocktail from favorites');
          const index = favorites.indexOf(drinkId);

          if (index > -1) {
            // only splice array when item is found
            favorites.splice(index, 1);
            console.log('index', index);
            console.log('Newly Removed', favorites);
          }
          setIsAdded(false);
        }
      } catch (error) {
        console.log('errorMessage', error);
      }
    }

    // add cocktail
    if (!isAdded) {
      try {
        const response = await addFavorite({
          id: signleDrink._id,
        });
        console.log('Added drink response', response);

        if (response.error) {
          console.log(
            'Error message while Adding',
            response.error.data.message
          );
        } else {
          favorites.push(drinkId);
          console.log('Newly ADDED', favorites);
          setIsAdded(true);
        }
      } catch (error) {
        console.log('errorMessage', error);
      }
    }
  };

  useEffect(() => {
    if (!favoritesArray) return;
    const arrayOfFavorites = [];

    const filterFavorites = () => {
      if (!favoritesArray.result) return;
      for (let key of favoritesArray.result) {
        arrayOfFavorites.push(key['_id']);
      }
      return arrayOfFavorites;
    };
    console.log('filterFavorites', filterFavorites());
    setFavorites(arrayOfFavorites);
  }, [favoritesArray]);

  useEffect(() => {
    if (!favorites) return;

    const checkForAddedDrinks = () => {
      return favorites.includes(drinkId);
    };
    checkForAddedDrinks();

    console.log('favoritesIncludesDrink', checkForAddedDrinks());

    //drink is NOT currentrly added
    if (!checkForAddedDrinks()) {
      setIsAdded(false);
    }
    //drink is already added
    if (checkForAddedDrinks()) {
      setIsAdded(true);
    }
  }, [favorites, drinkId, isAdded, signleDrink]);

  return (
    <div className={`${css['hero-section']}`}>
      <div className={`${css['description-section']}`}>
        <Title className={`${globalCss['global-title']} ${css['title']}`}>
          {signleDrink.drink}
        </Title>
        <p className={`${globalCss['global-p']} ${css['title-description']}`}>
          {signleDrink.glass} / {signleDrink.alcoholic}
        </p>

        <p className={`${globalCss['global-p']} ${css['description']}`}>
          {signleDrink.description}
        </p>
        <button
          type="button"
          onClick={handleClick}
          className={`${globalCss['global-button']} ${globalCss['custom-button']} ${css['btn-add-drink']}`}
        >
          {isAdded ? 'Remove from favorite' : 'Add to favorite drinks'}
        </button>
      </div>
      {/* image will be added from the props */}

      <img
        className={` ${css['img-hero']}`}
        src={signleDrink.drinkThumb}
        onError={e =>
          (e.target.src = require('../../../img/recipe/ingredient.png'))
        }
        alt="drink"
      />
    </div>
  );
};
