import globalCss from '../../../css/global.module.css';
import css from './Preparation.module.css';
import recipes from '../../../pages/my-drinks/recipes.json';

export const Preparation = () => {
  let recipe = recipes[4];

  console.log('recipes', recipe);

  return (
    <div className={`${css['preparation-section']}`}>
      <h2
        className={`${globalCss['global-title']} ${css['preparation-title']}`}
      >
        Recipe Preparation
      </h2>
      <div className={`${css['description-section']}`}>
        <p
          className={`${globalCss['global-p']} ${css['preparation-description']}`}
        >
          {recipe.instructions}
        </p>
        <p
          className={`${globalCss['global-p']} ${css['preparation-description']}`}
        >
          {recipe.instructionsDE}
        </p>
        <p
          className={`${globalCss['global-p']} ${css['preparation-description']}`}
        >
          {recipe.instructionsES}
        </p>
      </div>
      <img src={recipe.drinkThumb} alt="drink" width={335} height={430} />
    </div>
  );
};
