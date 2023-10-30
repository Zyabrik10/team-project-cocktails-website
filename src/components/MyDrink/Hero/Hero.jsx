import globalCss from '../../../css/global.module.css';
import css from './Hero.module.css';
import recipes from '../../../pages/my-drinks/recipes.json';
import { Title } from 'components/Title/Title';

export const Hero = () => {
  let recipe = recipes[4];
  console.log('recipes', recipes);
  return (
    <div className={`${css['hero-section']}`}>
      <div className={`${css['description-section']}`}>
        <h1 className={`${globalCss['global-title']} ${css['title']}`}>
          {recipe.drink}
        </h1>
        <Title title={recipe.drink} />
        <p className={`${globalCss['global-p']} ${css['title-description']}`}>
          {recipe.glass} / {recipe.alcoholic}
        </p>

        <p className={`${globalCss['global-p']} ${css['description']}`}>
          {recipe.description}
        </p>
        <button
          type="button"
          className={`${globalCss['global-button']} ${globalCss['custom-button']} ${css['btn-add-drink']}`}
        >
          Add to favorite drinks
        </button>
      </div>
      {/* image will be added from the props */}
      <div>
        <img
          className={` ${css['img-hero']}`}
          src={recipe.drinkThumb}
          alt="drink"
        />
      </div>
    </div>
  );
};
