import React from 'react';
import css from './CockTailCard.module.css';
import globalCss from '../../css/global.module.css';
import { Link, useLocation } from 'react-router-dom';
import { DeleteSvg } from './svg/DeleteSvg';
import { useSelector } from 'react-redux';
import { getThemeColor } from 'redux/theme/selectors';
import defaultImgDesk from '../../img/cocktailCard/default_desk.png';

export const CocktailCard = ({ mainDrinksPage, obj, handleDelete }) => {
  const locations = useLocation();
  const theme = useSelector(getThemeColor);

  const themeClass = theme === 'dark' ? 'main' : 'main light';

  const handleImageError = event => {
    event.target.src = defaultImgDesk;
  };
  return (
    <>
      <div className={`${css['drink_card']} ${themeClass}`}>
        <div className={css.drink_thumb}>
          <img
            className={css.img}
            src={obj.drinkThumb}
            alt={obj.drink}
            onError={handleImageError}
          />
        </div>
        {mainDrinksPage ? (
          <div className={css.main_drink_info}>
            <h2
              className={`${css['main_drink_title']} ${globalCss['global-title']}`}
            >
              {obj.drink}
            </h2>

            <Link
              to={`/drink/${obj._id}`}
              className={css.main_drink_seeMore}
              state={{ from: locations }}
            >
              See more
            </Link>
          </div>
        ) : (
          <div className={css.additional_drink_info}>
            <div className={css.additional_drink_details}>
              <h2
                className={`${css['additional_drink_title']} ${globalCss['global-title']}`}
              >
                {obj.drink}
              </h2>
              <p
                className={`${css['additional_drink_alc']} ${globalCss['global-title']}`}
              >
                {obj.alcoholic}
              </p>
              <p
                className={`${css['additional_drink_description']} ${globalCss['global-title']}`}
              >
                {obj.description}
              </p>
            </div>
            <div className={css.button_block}>
              <Link
                to={`/drink/${obj._id}`}
                className={`${css['link']} ${css['same']}`}
                state={{ from: locations }}
              >
                See more
              </Link>
              <button
                type="button"
                className={`${css['delete_button']} ${css['same']}`}
                onClick={() => handleDelete(obj._id)}
              >
                <DeleteSvg></DeleteSvg>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

//The component receives a parameter that specifies the display method, drink object, function handleDelete. Returns the drink card.