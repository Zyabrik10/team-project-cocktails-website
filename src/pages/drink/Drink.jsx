import { RecipePreparation } from 'components/DrinkPageComponents/RecipePreparation/RecipePreparation';
import { DrinkPageHero } from 'components/DrinkPageComponents/DrinkPageHero/DrinkPageHero';
import { DrinkIngredientsList } from 'components/DrinkPageComponents/DrinkIngredientsList/DrinkIngredientsList';
export const Drink = () => {
  return (
    <div>
      <DrinkPageHero />
      <DrinkIngredientsList />
      <RecipePreparation />
    </div>
  );
};
