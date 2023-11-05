import css from '../../css/global.module.css';
import SecDrinks from './sec-drinks/SecDrinks';

export default function Drinks() {
  return (
    <div className={css.container}>
      <SecDrinks/>
    </div>
  );
}
