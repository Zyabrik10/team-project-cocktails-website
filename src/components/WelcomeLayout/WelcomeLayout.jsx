import css from './WelcomeLayout.module.css';
import globalCss from '../../css/global.module.css';
// import { Suspense } from 'react';

export default function WelcomeLayout({ children }) {
  return (
    <div className={css['layout']}>
      <div className={`${css['container']} ${globalCss['container']}`}>
        <div className={css['des-1']}></div>
        <div className={css['des-2']}></div>
        <div className={css['des-3']}></div>
        <div style={{ position: 'relative', zIndex: '100', width: '100%' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
