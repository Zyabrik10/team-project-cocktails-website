import { DrinkContainer } from './components/DrinkContainer';
import { Hero } from './components/sec-hero/Hero';
import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <div className={css['dec-1']}></div>
      <div className={css['dec-2']}></div>
      <div className={css['dec-3']}></div>
      <div style={{ position: "reletive", zIndex: 10 }}>
        <Hero />
        <DrinkContainer />
      </div>
    </div>
  );
}
