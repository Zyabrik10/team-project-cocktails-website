import { DrinkContainer } from './components/DrinkContainer';
import { Hero } from './components/sec-hero/Hero';
import css from './Home.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getFavorite } from 'redux/favorite/selectors';
export default function Home() {
  const { items, isLoading, error } = useSelector(getFavorite);
  console.log('items', items);
  console.log('isLoading', isLoading);
  console.log('error', error);
  return (
    <div className={css.container}>
      <Hero />
      <DrinkContainer />
    </div>
  );
}
