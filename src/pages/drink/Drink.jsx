import { RecipePreparation } from 'components/RecipePreparation/RecipePreparation';
import { DrinkPageHero } from 'components/DrinkPageHero/DrinkPageHero';
import { DrinkIngredientsList } from 'components/DrinkIngredientsList/DrinkIngredientsList';
export const Drink = () => {
  return (
    <div>
      Drink Page
      <DrinkPageHero />
      <DrinkIngredientsList />
      <RecipePreparation />
    </div>
  );
};
