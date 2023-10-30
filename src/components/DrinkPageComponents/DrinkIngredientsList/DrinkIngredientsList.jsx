import globalCss from '../../../css/global.module.css';
// import css from './DrinkIngredientsList.module.css';
import recipes from '../../../pages/drink/recipes.json';
export const DrinkIngredientsList = () => {
  let recipe = recipes[0];
  console.log('receipes', recipe);
  return (
    <div>
      Drink Ingredients List
      {/* image will be added from the props */}
      <ul
        className={`${globalCss['global-list']} ${globalCss['flex-container']}`}
      >
        {recipe.ingredients.map(({ title, measure }) => {
          return (
            <li key={title}>
              <img
                src={recipe.drinkThumb}
                alt="drink"
                width={157}
                height={157}
              />{' '}
              <p className={globalCss['global-p']}>
                {title} <span>{measure}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
