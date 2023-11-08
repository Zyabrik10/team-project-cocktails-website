import { CocktailCard } from 'components/CocktailCard/CocktailCard';
import css from './FavList.module.css';

export const FavList = ({ favorites, handleDelete }) => {
  return (
    <ul className={css.drinksList}>
      {favorites.map(fav => (
        <li key={fav._id}>
          <CocktailCard obj={fav} handleDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
};
