import globalCss from '../../../css/global.module.css';
import css from './Preparation.module.css';

export const Preparation = ({ signleDrink }) => {
  return (
    <div className={`${css['preparation-section']}`}>
      <h2
        className={`${globalCss['global-title']} ${css['preparation-title']}`}
      >
        Recipe Preparation
      </h2>
      <div className={`${css['preparation-body']}`}>
        <div className={`${css['description-section']}`}>
          <p
            className={`${globalCss['global-p']} ${css['preparation-description']}`}
          >
            {signleDrink.instructions}
          </p>
        </div>
        <div className={`img-preparation-section`}>
          <img
            className={`${css['img-preparation']} `}
            src={`${require('../../../img/recipe/recipe_1x.png')}`}
            // srcSet={`${require('../../../img/recipe/recipe_mobile.png')}`}
            alt="three cocktails"
          />
        </div>
      </div>
    </div>
  );
};
