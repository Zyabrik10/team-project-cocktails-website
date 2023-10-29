import { useEffect, useState } from 'react';
import recipes from "../recipes.json"
import OrdinaryDrink from './sec-ordinary-drink/OrdinaryDrink';
import css from "../Home.module.css"
import ResizeHook from './ResizeHook';

export default function DrinkGroup ({ group }) {
  const [cocktails, setCocktails] = useState([]);
  const [amount, setAmount] = useState(1)
  let width = ResizeHook()
  useEffect(() => {
    // here I'm make request to take first three cocktails for this group
    setCocktails(recipes.filter(item => item.category === group).slice(0, amount));
  }, [group, amount]);
  useEffect(() => {
    if (width >= 1440) {
        setAmount(3)
    } else if (width >= 768) {
        setAmount(2)
    } else {
        setAmount(1)
    }
  }, [width])
  return (
    <div >
      <h3 className={css.categoryName}>{group}</h3>
      <div className={css.groupCard}>
        {cocktails.map(cocktail => (
          <OrdinaryDrink cocktail={cocktail} key={cocktail._id.$oid} />
        ))}
      </div>
    </div>
  );
};
