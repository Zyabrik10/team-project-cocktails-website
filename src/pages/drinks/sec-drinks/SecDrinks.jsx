import { DrinkList } from "components/DrinksList/DrinksList";
import { getDrinks } from "fakeApi";


export const SecDrinks = () => {
  const drinks = getDrinks();
  return (
    <main>
      <DrinkList drinks={drinks} />
    </main>
  );
};