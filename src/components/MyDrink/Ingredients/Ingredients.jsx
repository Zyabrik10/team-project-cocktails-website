import globalCss from '../../../css/global.module.css';
import css from './Ingredients.module.css';
import recipes from '../../../pages/my-drinks/recipes.json';
export const Ingredients = () => {
  let recipe = recipes[4];
  console.log('receipes', recipe);
  return (
    <div className={`${css['ingredients-section']}`}>
      <p className={`${globalCss['global-p']} ${css['title-ingredients']}`}>
        Ingredients
      </p>
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
              <p
                className={`${globalCss['global-p']} ${css['ingredient-description']}`}
              >
                {title} <span>{measure}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
