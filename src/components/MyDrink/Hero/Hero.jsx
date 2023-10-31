import { useState, useEffect, useMemo } from 'react';
import globalCss from '../../../css/global.module.css';
import css from './Hero.module.css';
import recipes from '../../../pages/my-drinks/recipes.json';
import { Title } from 'components/Title/Title';

export const Hero = () => {
  // 639b6de9ff77d221f190c520
  let recipe = recipes[4];

  // console.log('recipes', recipe);
  // console.log('recipes', recipe._id.$oid);
  let favorites = useMemo(
    () => [
      { id: '639b6de9ff77d221f190c520' },
      { id: '639b6de9ff77d221f190c521' },
      { id: '639b6de9ff77d221f190c522' },
    ],
    []
  );

  const [buttonText, setButtonText] = useState('Add to favorite drinks');
  const [favoriteDrinks, setFavoriteDrinks] = useState([
    { id: '639b6de9ff77d221f190c520' },
    { id: '639b6de9ff77d221f190c521' },
    { id: '639b6de9ff77d221f190c522' },
  ]);
  // useEffect(() => {
  //   setFavoriteDrinks(favorites);
  //   if (favoriteDrinks.find(({ id }) => id === recipe._id.$oid)) {
  //     setButtonText('Remove from favorites');
  //   } else {
  //     setButtonText('Add to favorite drinks');
  //   }
  //   // if (!favoriteDrinks) {
  //   //   return;
  //   // }
  //   // if (favoriteDrinks.find(({ id }) => id === recipe._id.$oid)) {
  //   //   setButtonText('Remove from favorites');
  //   // }
  //   // if (!favoriteDrinks.find(({ id }) => id === recipe._id.$oid)) {
  //   //   setButtonText('Add to favorite drinks');
  //   // }
  // }, [favoriteDrinks, favorites, recipe._id.$oid]);

  const handleClick = () => {
    const filteredArray = favoriteDrinks.find(
      ({ id }) => id === recipe._id.$oid
    );
    console.log('1.filteredArray', !filteredArray);
    console.log('1.1.filteredArray', filteredArray);

    if (!filteredArray) {
      setFavoriteDrinks(prevState => {
        return [...prevState, { id: recipe._id.$oid }];
      });
      setButtonText('Remove from favorites');
      console.log('2. favoriteDrinks', favoriteDrinks);
    }
    if (filteredArray) {
      const updateddArray = favorites.filter(
        ({ id }) => id !== recipe._id.$oid
      );
      console.log('updateddArray', updateddArray);
      setFavoriteDrinks(_ => {
        return [...updateddArray];
      });
      console.log('3. favoriteDrinks', favoriteDrinks);
      setButtonText('Add to favorite drinks');
    }
  };

  return (
    <div className={`${css['hero-section']}`}>
      <div className={`${css['description-section']}`}>
        <Title className={`${globalCss['global-title']} ${css['title']}`}>
          {recipe.drink}
        </Title>
        <p className={`${globalCss['global-p']} ${css['title-description']}`}>
          {recipe.glass} / {recipe.alcoholic}
        </p>

        <p className={`${globalCss['global-p']} ${css['description']}`}>
          {recipe.description}
        </p>
        <button
          type="button"
          onClick={handleClick}
          className={`${globalCss['global-button']} ${globalCss['custom-button']} ${css['btn-add-drink']}`}
        >
          {buttonText}
        </button>
      </div>
      {/* image will be added from the props */}
      <div>
        <img
          className={` ${css['img-hero']}`}
          src={recipe.drinkThumb}
          alt="drink"
        />
      </div>
    </div>
  );
};
