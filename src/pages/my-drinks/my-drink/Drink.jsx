import { useState, useEffect } from 'react';
import { Preparation } from 'components/MyDrink/Preparation/Preparation';
import { Hero } from 'components/MyDrink/Hero/Hero';
import { Ingredients } from 'components/MyDrink/Ingredients/Ingredients';
import globalCss from '../../../css/global.module.css';
import * as filtersAPI from '../../../redux/api/filtersAPI';
import recipes from '../../my-drinks/recipes.json';

export default function Drink() {
  // 639b6de9ff77d221f190c520
  let recipe = recipes[4];
  const [ingredients, setIngredients] = useState(null);
  const [drink, setDrink] = useState(null);
  const [filteredIngredients, setFilteredIngredients] = useState(null);

  const { data: ingredientsData } = filtersAPI.useGetIngredientsQuery();

  useEffect(() => {
    if (!ingredientsData) {
      return;
    }
    const { data } = ingredientsData;
    setIngredients(data);
    setDrink(recipe);

    const handleFiltering = () => {
      if (!drink) {
        return;
      }
      const filteredIdData = drink.ingredients.map(
        ({ ingredientId: { $oid: id }, measure }) => {
          console.log(measure);
          return {
            id,
            measure: measure ? measure : (measure = 'up to you'),
          };
        }
      );

      const filter = () => {
        let newArray = [];
        for (var i = 0; i < ingredients.length; i++) {
          for (var k = 0; k < filteredIdData.length; k++) {
            if (!ingredients[i]._id === filteredIdData[k].id) {
              return;
            }
            if (ingredients[i]._id === filteredIdData[k].id) {
              console.log('newObj', {
                ...filteredIdData[k],
                ...ingredients[i].ingredientThumb,
              });

              newArray.push({
                ...filteredIdData[k],
                title: ingredients[i].title,
                imageX: ingredients[i].ingredientThumb,
                imageM: ingredients[i]['thumb-medium'],
                imageS: ingredients[i]['thumb-small'],
              });
            }
          }
        }
        console.log('newArray', newArray);
        setFilteredIngredients(newArray);
        return newArray;
      };
      filter();
    };
    handleFiltering();
  }, [ingredientsData, ingredients, recipe, drink]);

  return (
    <div className={`${globalCss['container']}`}>
      <Hero cocktail={drink}/>
      <Ingredients ingredients={filteredIngredients} />
      <Preparation />
    </div>
  );
}
