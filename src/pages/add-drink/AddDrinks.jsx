import AddDrinkForm from 'components/AddDrinkForm';
import { Social } from 'components/Footer/components/Social/Social';
import { Title } from 'components/Title/Title';
import PopularDrinks from 'components/PopularDrinks';

import globalStyles from 'css/global.module.css';
import css from './AddDrinks.module.css';

export default function AddDrinks() {
  return (
    <div className={globalStyles['container']}>
      <Title children={'Add drink'} />

      <AddDrinkForm />

      <div className={css['socials-wrap']}>
        <Social title={'Follow Us'} />
      </div>

      <section>
        <h3>Popular drinks</h3>
        <PopularDrinks />
      </section>
    </div>
  );
}
