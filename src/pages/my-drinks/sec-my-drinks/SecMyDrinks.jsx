import { DrinksItem } from './DrinksItem';
import { Title } from 'components/Title/Title';
import css from './SecMyDrinks.module.css';
import globalCss from '../../../css/global.module.css';

export const SecMyDrinks = () => {
  return (
    <div className={`${globalCss.container}`}>
      <Title>My drinks</Title>
      <div className={css.drinksList}>
        <DrinksItem />
      </div>
    </div>
  );
};
