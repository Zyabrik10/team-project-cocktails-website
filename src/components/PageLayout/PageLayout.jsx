import css from './PageLoyout.module.css';

export default function WelcomeLayout({ children }) {
  return (
    <>
      <div className={css.gradient1}></div>
      <div className={css.gradient2}></div>
      <div>{children}</div>
    </>
  );
}
