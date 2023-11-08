import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getThemeColor } from 'redux/theme/selectors';

import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import Loader from 'components/Loader';

import { PopUp } from 'components/PopUp/PopUp';

import css from './layout.module.css';

export const Layout = () => {
  const theme = useSelector(getThemeColor);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const themeClass = theme === 'dark' ? '' : 'main light';

  useEffect(() => {
    if (pathname === '/') {
      navigate('/home');
    }
  }, [pathname, navigate]);

  return (
    <div>
      <Header />
      <main className={`${css['main']} ${themeClass}`}>
        <PopUp />
        <div className={css.gradient1}></div>
        <div className={css.gradient2}></div>
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
