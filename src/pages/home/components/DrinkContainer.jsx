import DrinkGroup from './DrinkGroup';
import css from '../Home.module.css';
import ResizeHook from './ResizeHook';
import { useEffect, useState } from 'react';
import globalcss from '../../../css/global.module.css';

export const DrinkContainer = () => {
  const [amount, setAmount] = useState(1);
  const [groups, setGroups] = useState({});
  let width = ResizeHook();
  useEffect(() => {
    fetch(`https://drunk404.onrender.com/drinks/mainpage`, {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQxNmEyNDE0MzMwYjhjOWNlZjhmYWIiLCJpYXQiOjE2OTg3ODk5NDQsImV4cCI6MTY5ODc5MzU0NH0.AMzqZhz6YfZuUURgoxZ9YGmVitPTSoDa533dysFv9IA',
      },
    })
      .then(res => res.json())
      .then(respond => {
        let groupped = respond.data.reduce((m, i) => ({ ...m, ...i }), {});
        setGroups(groupped);
      });
  }, []);
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
        {Object.entries(groups).map(([group, cocktails]) => (
          <DrinkGroup
            group={group}
            cocktails={cocktails.slice(0, amount)}
            key={group}
          />
        ))}
      </div>
      <div className={css.other}>
        <p
          className={`${globalcss['custom-button']} ${css['button']} `}
        >
          Other Drinks
        </p>
      </div>
    </>
  );
};
