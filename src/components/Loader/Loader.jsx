import { useSelector } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader';

import { getThemeColor } from 'redux/theme/selectors';

const Loader = ({
  size = 10,
  margin = 6,
  position = {},
  colorDarkTheme = '#f3f3f3',
  colorLightTheme = '#0a0a11',
}) => {
  const theme = useSelector(getThemeColor);
  const themeColor = theme === 'dark' ? colorDarkTheme : colorLightTheme;

  return (
    <PulseLoader
      color={themeColor}
      cssOverride={position}
      loading={true}
      size={size}
      margin={margin}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
