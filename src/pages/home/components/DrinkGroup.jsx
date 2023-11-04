import css from "../Home.module.css"
import { CocktailCard } from 'components/CocktailCard/CocktailCard';
import { useSelector } from 'react-redux';
import { getThemeColor } from 'redux/theme/selectors';

export default function DrinkGroup ({ group, cocktails }) {
  const theme = useSelector(getThemeColor);
  const themeClass = theme === 'dark' ? 'main' : 'main light';

  return (
    <div className={`${css['cocktailCard']} ${themeClass}`}>
      <h3 className={css.categoryName}>{group}</h3>
      <div className={css.groupCard}>
        {cocktails.map(cocktail => (
          <CocktailCard mainDrinksPage obj={cocktail} key={cocktail._id}/>
        ))}
      </div>
    </div>
  );
};
