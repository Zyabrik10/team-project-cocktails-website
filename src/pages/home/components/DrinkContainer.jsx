import DrinkGroup from './DrinkGroup';
import css from "../Home.module.css"
import ResizeHook from './ResizeHook';
import { useEffect, useState } from 'react';


export const DrinkContainer = () => {
  const [amount, setAmount] = useState(1)
  const [groups, setGroups] = useState({})
  let width = ResizeHook()
  useEffect(() => {
    // fetch(`http://localhost:3000/drinks/mainpage?size=${amount}`, {
      fetch(`https://drunk404.onrender.com/drinks/mainpage`, {
      method:"GET",
      headers:{
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQxMmNhMzRkNTJjOWMzMzBmNzBlMTYiLCJpYXQiOjE2OTg3NzAyNTEsImV4cCI6MTY5ODc3Mzg1MX0.8iTFQnJKjemg2psHj-KvPIQfPJ-FTSezzfq1rsd8hVM"
      }
    })
      .then(res => res.json())
      .then(respond => {
        let groupped = respond.data.reduce((m,i) => ({...m, ...i}),{})
        setGroups(groupped)})
  }, []);
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
    <>
      <div className={css.drinkGroup}>
        {Object.entries(groups).map(([group, cocktails]) => (
          <DrinkGroup group={group} cocktails={cocktails.slice(0,amount)} key={group} />
        ))}
      </div>
      <p>Other Drinks</p>
    </>
  );
};
