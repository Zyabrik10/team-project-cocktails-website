import React from 'react';
import css from './Title.module.css';
import globalCss from '../../css/global.module.css';

export const Title = ({ children }) => {
  return (
    <h1 className={[`${css['title']} ${globalCss['global-title']}`]}>
      {children}
    </h1>
  );
};
