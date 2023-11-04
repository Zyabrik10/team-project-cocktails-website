import { DrinkContainer } from './components/DrinkContainer';
import { Hero } from './components/sec-hero/Hero';
import css from "./Home.module.css";
import { useSelector } from 'react-redux';
import { getThemeColor } from 'redux/theme/selectors';

export default function Home() {
  const theme = useSelector(getThemeColor);
  const themeClass = theme === 'dark' ? 'main' : 'main light';

  return (
      <div className={`${css['container']} ${themeClass}`}>
        <Hero />
        <DrinkContainer />
      </div>
  );
}
