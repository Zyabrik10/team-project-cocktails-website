import { Title } from 'components/Title/Title';
import css from './SecMyDrinks.module.css';
import globalCss from '../../../css/global.module.css';
import { DrinksList } from '../../../components/MyDrinksComponent/DrinksList';
// import { NotFoundMyDrinks } from 'components/MyDrinksComponent/NotFoundMyDrinks';

export const SecMyDrinks = ({ myDrinks }) => {
  return (
    <div className={`${globalCss.container} ${css.section}`}>
      <Title>My drinks</Title>
      {/* {myDrinks ? */}
        <DrinksList />
        {/* : <NotFoundMyDrinks />} */}
    </div>
  );
};
