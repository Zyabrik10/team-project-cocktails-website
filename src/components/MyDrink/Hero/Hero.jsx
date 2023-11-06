import globalCss from '../../../css/global.module.css';
import css from './Hero.module.css';
import { Title } from 'components/Title/Title';
import recipes from '../../../pages/my-drinks/recipes.json';

export const Hero = ({ cocktail }) => {
  // const [buttonText, setButtonText] = useState('Add to favorite drinks');
  let recipe = recipes[4];

  const handleClick = () => {
    console.log('onClick action');
  };

  return (
    <div className={`${css['hero-section']}`}>
      <div className={`${css['description-section']}`}>
        <Title className={`${globalCss['global-title']} ${css['title']}`}>
          {recipe.drink}
        </Title>
        <p className={`${globalCss['global-p']} ${css['title-description']}`}>
          {recipe.glass} / {recipe.alcoholic}
        </p>

        <p className={`${globalCss['global-p']} ${css['description']}`}>
          {recipe.description}
        </p>
        <button
          type="button"
          onClick={handleClick}
          className={`${globalCss['global-button']} ${globalCss['custom-button']} ${css['btn-add-drink']}`}
        >
          Add to favorite drinks
        </button>
      </div>
      {/* image will be added from the props */}
      <div className={` ${css['img-section']}`}>
        <img
          className={` ${css['img-hero']}`}
          src={recipe.drinkThumb}
          onError={e =>
            (e.target.src = require('../../../img/recipe/ingredient.png'))
          }
          alt="drink"
        />
      </div>
    </div>
  );
};
