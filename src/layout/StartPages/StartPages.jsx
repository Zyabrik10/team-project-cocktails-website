import { Outlet } from 'react-router-dom';

import css from './StartPages.module.css';

export const StartPages = () => {
  return (
    <div className={css['layout']}>
      <div className={css['des-1']}></div>
      <div className={css['des-2']}></div>
      <div className={css['des-3']}></div>
      <div style={{ position: 'relative', zIndex: '100' }}>
        <Outlet />
      </div>
    </div>
  );
};
