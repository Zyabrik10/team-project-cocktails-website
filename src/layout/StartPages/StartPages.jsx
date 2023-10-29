import { Outlet } from 'react-router-dom';

import css from './StartPages.module.css';
import globalCss from '../../css/global.module.css';
import { Suspense } from 'react';


export const StartPages = () => {
  return (
    <div className={css['layout']}>
      <div className={`${css['container']} ${globalCss["container"]}`}>
        <div className={css['des-1']}></div>
        <div className={css['des-2']}></div>
        <div className={css['des-3']}></div>
        <div style={{ position: 'relative', zIndex: '100', width: "100%" }}>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
