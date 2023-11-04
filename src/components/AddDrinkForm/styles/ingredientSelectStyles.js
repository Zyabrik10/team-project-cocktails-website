import selectsStyles from 'components/AddDrinkForm/styles/selectsStyles';

const ingredientSelectStyles = {
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
    border: '1px solid var(--secont-text-cl)',
    '&:hover': {
      borderColor: 'var(--text-color)',
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
  }),
};

export default ingredientSelectStyles;
