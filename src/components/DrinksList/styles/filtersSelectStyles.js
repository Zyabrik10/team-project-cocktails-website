const filtersSelectStyles = {
  container: baseStyles => ({
    ...baseStyles,
    paddingTop: '14px',
    '@media screen and (min-width: 768px)': {
      ...baseStyles['@media screen and (min-width: 768px)'],
      width: '199px',
      paddingTop: '60px',
    },
    '@media screen and (min-width: 1440px)': {
      ...baseStyles['@media screen and (min-width: 1440px)'],
      paddingTop: '80px',
    },
  }),
  // placeholder: baseStyles => ({
  //   ...baseStyles,
  //   color: '#f3f3f3',
  //   paddingLeft: '24px',
  //   fontSize: '14px',
  //   lineHeight: 1.28,
  //   '@media screen and (min-width: 768px)': {
  //     ...baseStyles['@media screen and (min-width: 768px)'],
  //     fontSize: '17px',
  //     lineHeight: 1.56,
  //   },
  // }),
  control: (baseStyles, { selectProps }) => ({
    ...baseStyles,
    height: '54px',
    minHeight: '34px',
    backgroundColor: '#161f37',
    boxShadow: 'none',
    cursor: 'pointer',

    borderColor: 'transparent',
    borderRadius: '200px',
    '&:hover': {
      border: '1px solid var(--text-color)',
      backgroundColor: '#434d67',
    },
  }),
  dropdownIndicator: (baseStyles, { selectProps }) => ({
    ...baseStyles,
    padding: selectProps.menuIsOpen ? '17px 0 17px 24px' : '17px 24px 17px 0',
    transform: selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0)',
    color: selectProps.menuIsOpen ? '#F3F3F333' : '#f3f3f3',
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    padding: 0,
  }),
  indicatorSeparator: baseStyles => ({
    ...baseStyles,
    display: 'none',
  }),
  singleValue: baseStyles => ({
    ...baseStyles,
    paddingLeft: '24px',
    margin: 0,
    color: '#f3f3f3',
    fontSize: '14px',

    lineHeight: 1.28,

    '@media screen and (min-width: 768px)': {
      ...baseStyles['@media screen and (min-width: 768px)'],
      fontSize: '17px',
      lineHeight: 1.56,
    },
  }),
  menu: baseStyles => ({
    ...baseStyles,
    paddingTop: '10px',
    paddingBottom: '10px',

    borderRadius: '20px',
    backgroundColor: 'var(--button-bg-active)',
  }),
  menuList: baseStyles => ({
    ...baseStyles,
    padding: 0,
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#434d67',
      borderRadius: '20px',
    },
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    color:
      state.getValue()[0].label === state.data.label
        ? 'var(--text-color)'
        : 'var(--secont-text-cl)',
    paddingLeft: '24px',
    fontSize: '14px',
    lineHeight: 1.28,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    '&:hover': {
      color: 'var(--text-color)',
    },
    '&:active': {
      color: 'var(--text-color)',
      backgroundColor: 'var(--secont-text-cl)',
    },
    textOverflow: 'ellipsis',
    '@media screen and (min-width: 768px)': {
      ...baseStyles['@media screen and (min-width: 768px)'],
      fontSize: '17px',
      lineHeight: 1.56,
    },
  }),
};

export default filtersSelectStyles;
