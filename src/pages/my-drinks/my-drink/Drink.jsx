import { useState, useEffect } from 'react';
import { Preparation } from 'components/MyDrink/Preparation/Preparation';
import { Hero } from 'components/MyDrink/Hero/Hero';
import { Ingredients } from 'components/MyDrink/Ingredients/Ingredients';
import globalCss from '../../../css/global.module.css';
import * as filtersAPI from '../../../redux/api/filtersAPI';
import popularDrinksAPI from 'redux/api/popularDrinksAPI';
import { useParams } from 'react-router-dom';
import Loader from '../../../components/Loader';

export default function Drink() {
  const [ingredients, setIngredients] = useState(null);
  const [drink, setDrink] = useState(null);
  const [filteredIngredients, setFilteredIngredients] = useState(null);

  const { drinkId } = useParams();

  const { data: ingredientsData } = filtersAPI.useGetIngredientsQuery();
  const { data: drinkInfo } = popularDrinksAPI.useGetDrinkByIdQuery(drinkId);

  useEffect(() => {
    if (!ingredientsData) {
      return;
    }
    if (!drinkInfo) return;
    const { data } = drinkInfo;
    setDrink(data);

    const { data: ingData } = ingredientsData;
    setIngredients(ingData);

    const handleFiltering = async () => {
      if (!drink) {
        return;
      }

      const filteredIdData = drink.ingredients.map(
        ({ ingredientId, measure }) => {
          return {
            id: ingredientId,
            measure: measure ? measure : (measure = 'up to you'),
          };
        }
      );

      const filter = async () => {
        let newArray = [];
        for (var i = 0; i < ingredients.length; i++) {
          for (var k = 0; k < filteredIdData.length; k++) {
            if (!ingredients[i]._id === filteredIdData[k].id) {
              return;
            }
            if (ingredients[i]._id === filteredIdData[k].id) {
              await newArray.push({
                ...filteredIdData[k],
                title: ingredients[i].title,
                imageX: ingredients[i].ingredientThumb,
                imageM: ingredients[i]['thumb-medium'],
                imageS: ingredients[i]['thumb-small'],
              });
            }
          }
        }
        setFilteredIngredients(newArray);
        return newArray;
      };
      filter();
    };
    handleFiltering();
  }, [ingredientsData, ingredients, drink, drinkInfo]);

  return !drink ? (
    <Loader />
  ) : (
    <div className={`${globalCss['container']}`}>
      <Hero signleDrink={drink} />
      <Ingredients ingredients={filteredIngredients} />
      <Preparation signleDrink={drink} />
    </div>
  );
}
