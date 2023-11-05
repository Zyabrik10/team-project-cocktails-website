import css from './sec-my-drinks/SecMyDrinks.module.css';
import { SecMyDrinks } from './sec-my-drinks/SecMyDrinks';

export default function MyDrinks() {
  return (
    <>
      <div className={css.gradient1}></div>
      <div className={css.gradient2}></div>
      <div className={css.gradient3}></div>
      <SecMyDrinks />
    </>
  );
}
