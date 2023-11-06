import globalCss from '../../../css/global.module.css';
import css from './Hero.module.css';
import { Title } from 'components/Title/Title';

export const Hero = ({ signleDrink }) => {
  // const [buttonText, setButtonText] = useState('Add to favorite drinks');
  console.log('propsHero', signleDrink);

  const handleClick = () => {
    console.log('onClick action');
  };

  return (
    <div className={`${css['hero-section']}`}>
      <div className={`${css['description-section']}`}>
        <Title className={`${globalCss['global-title']} ${css['title']}`}>
          {signleDrink.drink}
        </Title>
        <p className={`${globalCss['global-p']} ${css['title-description']}`}>
          {signleDrink.glass} / {signleDrink.alcoholic}
        </p>

        <p className={`${globalCss['global-p']} ${css['description']}`}>
          {signleDrink.description}
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

      <img
        className={` ${css['img-hero']}`}
        src={signleDrink.drinkThumb}
        onError={e =>
          (e.target.src = require('../../../img/recipe/ingredient.png'))
        }
        alt="drink"
      />
    </div>
  );
};
