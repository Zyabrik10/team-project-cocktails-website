import AddDrinkForm from 'components/AddDrinkForm';
import { Social } from 'components/AddDrinkForm/components/Social/Social';
import { Title } from 'components/Title/Title';
import PopularDrinks from 'components/PopularDrinks';

import globalStyles from 'css/global.module.css';
import css from './AddDrinks.module.css';

const AddDrinks = () => {
  return (
    <div className={globalStyles['container']}>
      <section className={css['add-page-section']}>
        <Title children={'Add drink'} />
        <div className={css['add-blocks-wrap']}>
          <AddDrinkForm />

          <div>
            <div className={css['socials-wrap']}>
              <Social title={'Follow Us'} />
            </div>

            <section className={css['popular-section']}>
              <h3 className={css['social-title']}>Popular drinks</h3>
              <PopularDrinks />
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddDrinks;
