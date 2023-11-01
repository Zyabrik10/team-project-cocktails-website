import globalCss from '../../../css/global.module.css';
import css from './Ingredients.module.css';
export const Ingredients = ({ ingredients }) => {
  return (
    <div className={`${css['ingredients-section']}`}>
      <p className={`${globalCss['global-p']} ${css['title-ingredients']}`}>
        Ingredients
      </p>

      <ul
        className={`${globalCss['global-list']}  ${css['list-ingredients']} `}
      >
        {ingredients &&
          ingredients.map(({ title, measure, id, imageX }) => {
            return (
              <li className={`${css['item-ingredient']}`} key={id}>
                <img
                  className={`${css['img-ingredient']}`}
                  src={imageX}
                  alt={title}
                  onError={e =>
                    (e.target.src = require('../../../img/recipe/ingredient.png'))
                  }
                />
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
