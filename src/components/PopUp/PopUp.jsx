import { Toaster } from 'react-hot-toast';
import css from './PopUp.module.css';
import { useSelector } from 'react-redux';
import { getThemeColor } from 'redux/theme/selectors';
export const PopUp = () => {
  const theme = useSelector(getThemeColor);
  const themeClass = theme === 'dark' ? 'main' : 'main light';
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        className: `${css['popup']} ${themeClass}`,
        duration: 1000,
      }}
    />
  );
};
