import { DrinkContainer } from './components/DrinkContainer';
import { Hero } from './components/sec-hero/Hero';
import css from "./Home.module.css"

export function Home() {
  return (
      <div className={css.container}>
        <Hero />
        <DrinkContainer />
      </div>
  );
}
