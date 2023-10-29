import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";


export const Layout = () => {
  return (
    <>
        <Header />
          <main>
              <Suspense>
                    <Outlet/>             
              </Suspense>
            </main>
        <Footer />
    </>
  );
};


