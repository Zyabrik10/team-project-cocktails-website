import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import Loader from 'components/Loader';
import { PopUp } from 'components/PopUp/PopUp';

// import radialsCSS from 'components/WelcomeLayout/WelcomeLayout.module.css';

export const Layout = () => {
  return (
    <div>
      <Header />
      <main style={{ position: 'relative' }}>
        <PopUp />
        {/* Можна користуватися, але потрібно дописати медіаКвері в стилях */}
        {/* <div className={radialsCSS['des-2']} style={{ zIndex: '-1' }}></div>
        <div className={radialsCSS['des-3']} style={{ zIndex: '-1' }}></div> */}
        <Suspense fallback={<Loader size={100} />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
