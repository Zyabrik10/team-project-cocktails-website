import { Preparation } from 'components/MyDrink/Preparation/Preparation';
import { Hero } from 'components/MyDrink/Hero/Hero';
import { Ingredients } from 'components/MyDrink/Ingredients/Ingredients';
import globalCss from '../../css/global.module.css';

export const Drink = () => {
  return (
    <div className={`${globalCss['container']}`}>
      <Hero />
      <Ingredients />
      <Preparation />
    </div>
  );
};
