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
      {/* <div className={css['dec-1']}></div>
      <div className={css['dec-2']}></div>
      <div className={css['dec-3']}></div> */}
      <div style={{ position: "reletive", zIndex: 10 }}>

        <Hero />
        <DrinkContainer />
      </div>
    </div>
  );
}
