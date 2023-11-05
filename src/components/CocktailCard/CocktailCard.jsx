import React from 'react';
import css from './CockTailCard.module.css';
import globalCss from '../../css/global.module.css';
import { Link, useLocation } from 'react-router-dom';
import { DeleteSvg } from './svg/DeleteSvg';
import defaltDrink from '../../img/home/ice_tea_1x.png';
import { useSelector } from 'react-redux';
import { getThemeColor } from 'redux/theme/selectors';
import defaultImgDesk from '../../img/cocktailCard/default_desk.png';
import defaultImgTab from '../../img/cocktailCard/default_tab.png';
import defaultImgMob from '../../img/cocktailCard/default_mob.png';

// example card
// const obj = {
//   _id: {
//     $oid: '639b6de9ff77d221f190c563',
//   },
//   drink: 'Just a Moonmint',
//   drinkAlternate: 'Sorry, not specified',
//   tags: 'Sorry, not specified',
//   video: 'Sorry, not specified',
//   category: 'Shake',
//   IBA: 'Sorry, not specified',
//   alcoholic: 'Non alcoholic',
//   glass: 'Highball Glass',
//   description:
//     'Just a Moonmint is a refreshing and minty cocktail that combines the flavors of vodka, lime juice, and mint syrup. It is made by shaking vodka, lime juice, mint syrup, and ice together and straining it into a glass. The result is a crisp and invigorating drink with a hint of sweetness from the mint syrup. Sip on this cocktail and let the coolness of the mint refresh your palate.',
//   instructions:
//     'Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.',
//   instructionsES:
//     'Coloque todos los ingredientes en el vaso de la licuadora, tape y mezcle a velocidad media hasta que estén bien mezclados. Vierta en un vaso alto, 2 medianos o 3 pequeños y beba.',
//   instructionsDE:
//     'Alle Zutaten in den Mixer geben - abdecken und bei mittlerer Geschwindigkeit schaumig schlagen, bis sie gut vermischt sind. In ein großes, 2 mittlere oder 3 kleine Gläser füllen und geniessen.',
//   instructionsFR:
//     "Placer tous les ingrédients dans le bol du mélangeur - couvrir et fouetter à vitesse moyenne jusqu'à ce que le tout soit bien mélangé. Verser dans un grand, 2 moyens ou 3 petits verres et boire.",
//   instructionsIT:
//     'Mettere tutti gli ingredienti nella caraffa del frullatore - coprire e montare a velocità media fino a quando non sono ben amalgamati.Versare in un bicchiere alto, 2 medi o 3 piccoli e bere.',
//   instructionsRU:
//     'Поместите все ингредиенты в чашу блендера, накройте крышкой и взбивайте на средней скорости, пока они хорошо не перемешаются. Налейте в один высокий, 2 средних или 3 маленьких стакана и выпейте.',
//   instructionsPL:
//     'Umieść wszystkie składniki w dzbanku blendera - przykryj i ubijaj na średnich obrotach, aż dobrze się połączą. Wlej jedną dużą, 2 średnie lub 3 małe szklanki i wypij.',
//   instructionsUK:
//     'Помістіть усі інгредієнти в ємність блендера, накрийте кришкою та збийте на середній швидкості, поки добре не змішаються. Налийте в одну високу, 2 середні або 3 маленькі склянки і випийте.',
//   drinkThumb: 'https://ftp.goit.study/img/drinkify/recipes/Just_a_Moonmint.jpg',
//   ingredients: [
//     {
//       title: 'Milk',
//       measure: '2 cups',
//       ingredientId: {
//         $oid: '64aebb7f82d96cc69e0eb4d5',
//       },
//     },
//     {
//       title: 'Chocolate syrup',
//       ingredientId: {
//         $oid: '64aebb7f82d96cc69e0eb4d7',
//       },
//     },
//     {
//       title: 'Mint syrup',
//       ingredientId: {
//         $oid: '64f1d5c269d8333cf130fb61',
//       },
//     },
//   ],
//   shortDescription:
//     'A refreshing and minty cocktail with vodka, lime juice, and mint syrup.',
// };

export const CocktailCard = ({ mainDrinksPage, obj, handleDelete }) => {
  const locations = useLocation();
  const theme = useSelector(getThemeColor);

  const themeClass = theme === 'dark' ? 'main' : 'main light';

  const handleImageError = event => {
    event.target.src = defaltDrink;
  };
  return (
    <>
      <div className={`${css['drink_card']} ${themeClass}`}>
        <div className={css.drink_thumb}>
          {/* <img
            className={css.img}
            src={obj.drinkThumb ?? defaultImgDesk}
            alt={obj.drink}
            onError={handleImageError}
          /> */}
          <picture className={css.img}>
            <source
              srcSet={obj.drinkThumb ?? defaultImgDesk}
              media="(min-width: 1440px)"
            />
            <source
              srcSet={obj.drinkThumb ?? defaultImgTab}
              media="(min-width: 768px)"
            />
            <img
              src={obj.drinkThumb ?? defaultImgMob}
              alt={obj.drink}
              onError={handleImageError}
            />
          </picture>
        </div>
        {mainDrinksPage ? (
          <div className={css.main_drink_info}>
            <h2
              className={`${css['main_drink_title']} ${globalCss['global-title']}`}
            >
              {obj.drink}
            </h2>

            <Link
              to={`/drink/${obj._id.$oid}`}
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
                to={`/drink/${obj._id.$oid}`}
                className={`${css['link']} ${css['same']}`}
                state={{ from: locations }}
              >
                See more
              </Link>
              <button
                type="button"
                className={`${css['delete_button']} ${css['same']}`}
                onClick={() => handleDelete()}
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
