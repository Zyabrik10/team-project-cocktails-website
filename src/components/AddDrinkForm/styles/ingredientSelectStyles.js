import selectsStyles from 'components/AddDrinkForm/styles/selectsStyles';

const ingredientSelectStyles = (isErrorMess = false) => {
  return {
    ...selectsStyles,

    container: baseStyles => ({
      ...baseStyles,
      paddingTop: 0,
    }),
    control: baseStyles => ({
      ...baseStyles,
      width: '200px',
      height: '50px',
      minHeight: '50px',
      padding: '0 16px',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      borderBottom: 'none',
      borderRadius: '200px',
      cursor: 'pointer',
      border: isErrorMess
        ? '1px solid var(--error-message-cl)'
        : '1px solid var(--secont-text-cl)',
      '&:hover': {
        outline: '2px solid var(--text-color)!important',
      },
      '@media screen and (max-width: 377.98px)': {
        ...baseStyles['@media screen and (min-width: 377.98px)'],
        width: '172px',
      },
      '@media screen and (min-width: 768px)': {
        ...baseStyles['@media screen and (min-width: 768px)'],
        width: '332px',
        height: '56px',
      },
      '@media screen and (min-width: 1440px)': {
        ...baseStyles['@media screen and (min-width: 1440px)'],
        width: '316px',
      },
    }),
    valueContainer: baseStyles => ({
      ...baseStyles,
      color: 'var(--text-color)',
      textAlign: 'start',
      padding: 0,
      margin: 0,
    }),
    singleValue: baseStyles => ({
      ...baseStyles,
      margin: 0,
      color: 'inherit',
      '@media screen and (min-width: 768px)': {
        ...baseStyles['@media screen and (min-width: 768px)'],
        fontSize: '17px',
        lineHeight: '2.6',
      },
    }),
  };
};

export default ingredientSelectStyles;
