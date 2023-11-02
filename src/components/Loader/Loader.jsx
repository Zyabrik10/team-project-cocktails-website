import { Triangle } from 'react-loader-spinner';

import css from './Loader.module.css';

const Loader = () => {
  return (
    <Triangle
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="triangle-loading"
      wrapperStyle={css['layout']}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;
