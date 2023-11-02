import AddDrinkForm from 'components/AddDrinkForm';
import { Social } from 'components/Footer/components/Social/Social';
import { Title } from 'components/Title/Title';
import PopularDrinks from 'components/PopularDrinks';

import css from 'css/global.module.css';

export default function AddDrinks() {
  return (
    <div className={css['container']}>
      <Title children={'Add drink'} />

      <AddDrinkForm />

      <div>
        <h3>Follow Us</h3>
        <Social />
      </div>

      <section>
        <h3>Popular drinks</h3>
        <PopularDrinks />
      </section>
    </div>
  );
}
