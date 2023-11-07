import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { getThemeColor } from 'redux/theme/selectors';

import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import Loader from 'components/Loader';

import { PopUp } from 'components/PopUp/PopUp';

import css from './layout.module.css';
// import radialsCSS from 'components/WelcomeLayout/WelcomeLayout.module.css';

export const Layout = () => {
  const theme = useSelector(getThemeColor);
  const themeClass = theme === 'dark' ? '' : 'main light';
  return (
    <div>
      <Header />
      <main className={`${css['main']} ${themeClass}`}>
        <PopUp />
      <div className={css.gradient1}></div>
      <div className={css.gradient2}></div>
        {/* Можна користуватися, але потрібно дописати медіаКвері в стилях */}
        {/* <div className={radialsCSS['des-2']} style={{ zIndex: '-1' }}></div>
        <div className={radialsCSS['des-3']} style={{ zIndex: '-1' }}></div> */}
        <Suspense
          fallback={
            <Loader
              size={20}
              margin={10}
              position={{
                marginTop: '100px',
                marginLeft: '50%',
                transform: 'translateX(-8%)',
              }}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
