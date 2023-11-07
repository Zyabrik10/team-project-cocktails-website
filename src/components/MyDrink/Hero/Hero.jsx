import globalCss from '../../../css/global.module.css';
import css from './Hero.module.css';
import { Title } from 'components/Title/Title';

import favoritesAPI from 'redux/api/favoritesAPI';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { PopUp } from 'components/PopUp/PopUp';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { getThemeColor } from 'redux/theme/selectors';
import toesterCss from '../../../components/PopUp/PopUp.module.css';
export const Hero = ({ signleDrink }) => {
  const theme = useSelector(getThemeColor);
  const themeClass = theme === 'dark' ? 'main' : 'main light';

  const { drinkId } = useParams();
  const [favorites, setFavorites] = useState(null);
  const [addFavorite] = favoritesAPI.useAddFavoriteMutation();
  const [removeFavorite] = favoritesAPI.useRemoveFavoriteMutation();

  const [isAdded, setIsAdded] = useState(false);
  const { data: favoritesArray } = favoritesAPI.useGetFavoritesQuery();

  // add or remove cocktail from the favorites
  const handleClick = async event => {
    event.target.blur();
    //remove cocktail
    if (isAdded) {
      try {
        const response = await removeFavorite({
          id: signleDrink._id,
        });

        if (response.error) {
          console.log('Error message', response.error.data.message);
          toast.error('Error occurred, drink was not removed.');
        } else {
          const index = favorites.indexOf(drinkId);
          if (index > -1) {
            // only splice array when item is found
            favorites.splice(index, 1);
          }
          setIsAdded(false);
          toast.success('Removed from favorite!');
        }
      } catch (error) {
        console.log('errorMessage', error);
        toast.error('Error occurred, drink was not removed.');
      }
    }

    // add cocktail
    if (!isAdded) {
      try {
        const response = await addFavorite({
          id: signleDrink._id,
        });

        if (response.error) {
          console.log(
            'Error message while Adding',
            response.error.data.message
          );
          toast.error('Error occurred, drink was not added');
        } else {
          favorites.push(drinkId);
          setIsAdded(true);
          toast.success('Added to favorite!');
        }
      } catch (error) {
        console.log('errorMessage', error);
        toast.error('Error occurred, drink was not added');
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
    filterFavorites();
    setFavorites(arrayOfFavorites);
  }, [favoritesArray]);

  useEffect(() => {
    if (!favorites) return;

    const checkForAddedDrinks = () => {
      return favorites.includes(drinkId);
    };
    checkForAddedDrinks();

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
          {isAdded ? 'Remove from favorite drinks' : 'Add to favorite drinks'}
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
      <PopUp />
      <Toaster
        position="top-center"
        toastOptions={{
          className: `${toesterCss['popup']} ${themeClass}`,
          duration: 2000,
        }}
      />
    </div>
  );
};
