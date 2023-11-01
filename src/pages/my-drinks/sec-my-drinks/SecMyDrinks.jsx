import { Title } from 'components/Title/Title';
import css from './SecMyDrinks.module.css';
import globalCss from '../../../css/global.module.css';
import { DrinksList } from './DrinksList';

export const SecMyDrinks = () => {
  return (
    <div className={`${globalCss.container} ${css.section}`}>
      <div className={css.gradient1}></div>
      <div className={css.gradient2}></div>
      <div className={css.gradient3}></div>

      <Title>My drinks</Title>
      <DrinksList />
    </div>
  );
};
