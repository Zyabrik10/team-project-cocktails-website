import { Title } from 'components/Title/Title';
import css from './SecMyDrinks.module.css';
import globalCss from '../../../css/global.module.css';
import { DrinksList } from './DrinksList';

export const SecMyDrinks = () => {
  return (
    <div className={`${globalCss.container} ${css.section}`}>
      <Title>My drinks</Title>
      <DrinksList />
    </div>
  );
};
