import globalCss from '../../../css/global.module.css';
// import css from './RecipePreparation.module.css';
import recipes from '../../../pages/drink/recipes.json';

export const RecipePreparation = () => {
  let recipe = recipes[0];

  console.log('recipes', recipe);

  return (
    <div>
      <h2 className={`${globalCss['global-title']}`}>Recipe Preparation</h2>

      <p className={globalCss['global-p']}>{recipe.instructions}</p>
      <p className={globalCss['global-p']}>{recipe.instructionsDE}</p>
      <p className={globalCss['global-p']}>{recipe.instructionsES}</p>

      <img src={recipe.drinkThumb} alt="drink" width={335} height={430} />
    </div>
  );
};
