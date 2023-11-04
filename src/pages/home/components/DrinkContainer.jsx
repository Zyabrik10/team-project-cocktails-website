import DrinkGroup from './DrinkGroup';
import css from '../Home.module.css';
import ResizeHook from './ResizeHook';
import { useEffect, useState } from 'react';
import globalcss from '../../../css/global.module.css';
import { useGetMainPageCocktailsQuery } from '../../../redux/api/popularDrinksAPI';

export const DrinkContainer = () => {
  const [amount, setAmount] = useState(1);
  let width = ResizeHook();
  const { data, isLoading } = useGetMainPageCocktailsQuery();

  useEffect(() => {
    if (width >= 1440) {
      setAmount(3);
    } else if (width >= 768) {
      setAmount(2);
    } else {
      setAmount(1);
    }
  }, [width]);

  return (
    <>
      <div className={css.drinkGroup}>
        {isLoading ? (
          <div>Loading....</div>
        ) : (
          Object.entries(data.data.reduce((m, i) => ({ ...m, ...i }))).map(
            ([group, cocktails]) => (
              <DrinkGroup
                group={group}
                cocktails={cocktails.slice(0, amount)}
                key={group}
              />
            )
          )
        )}
      </div>
      <div className={css.other}>
        <p className={`${globalcss['custom-button']} ${css['button']} `}>
          Other Drinks
        </p>
      </div>
    </>
  );
};
