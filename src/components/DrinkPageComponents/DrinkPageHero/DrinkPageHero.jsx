import globalCss from '../../../css/global.module.css';
// import css from './DrinkPageHero.module.css';
import recipes from '../../../pages/drink/recipes.json';

export const DrinkPageHero = () => {
  let recipe = recipes[0];
  console.log('recipes', recipe.drinkThumb);
  return (
    <div>
      <h1 className={`${globalCss['global-title']}`}>Just a Moonmint</h1>
      <p className={globalCss['global-p']}>Highball glass / Non alcoholic</p>

      <p className={globalCss['global-p']}>{recipe.description}</p>
      {/* image will be added from the props */}
      <img src={recipe.drinkThumb} alt="drink" width={335} height={400} />
      <button
        type="button"
        className={`${globalCss['global-button']} ${globalCss['custom-button']}`}
      >
        Add to favorite drinks
      </button>
    </div>
  );
};
