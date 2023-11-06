const selectsStyles = {
  container: baseStyles => ({
    ...baseStyles,
    paddingTop: '16px',
  }),
  control: (baseStyles, { selectProps }) => ({
    ...baseStyles,
    height: '34px',
    minHeight: '34px',
    paddingBottom: '14px',
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer',
    borderBottom: `1px solid ${
      selectProps.menuIsOpen ? 'var(--text-color)' : 'var(--secont-text-cl)'
    }`,
    borderRadius: 0,
    '&:hover': {
      borderBottom: '2px solid var(--text-color)',
    },
    '@media screen and (min-width: 768px)': {
      ...baseStyles['@media screen and (min-width: 768px)'],
      height: '40px',
      paddingBottom: '18px',
    },
  }),
  dropdownIndicator: (baseStyles, { selectProps }) => ({
    ...baseStyles,
    padding: 0,
    transform: selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0)',
    color: selectProps.menuIsOpen
      ? 'var(--secont-text-cl)'
      : 'var(--text-color)',
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    color: 'var(--text-color)',
    textAlign: 'end',
  }),
  indicatorSeparator: baseStyles => ({
    ...baseStyles,
    display: 'none',
  }),
  singleValue: baseStyles => ({
    ...baseStyles,
    padding: 0,
    marginLeft: 0,
    marginRight: '8px',
    color: 'var(--text-color)',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1',
    overflow: 'visible',
  }),
  menu: baseStyles => ({
    ...baseStyles,
    top: 43,
    right: 0,

    width: '131px',
    padding: '7px 2px 7px 10px',
    margin: 0,
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.33',
    color: 'var(--secont-text-cl)',
    borderRadius: '12px',
    backgroundColor: 'var(--select-menu-bg)',
    '@media screen and (min-width: 768px)': {
      ...baseStyles['@media screen and (min-width: 768px)'],
      width: '139px',
      padding: '14px 2px 14px 14px',
      borderRadius: '20px',
    },
    '@media screen and (min-width: 1440px)': {
      ...baseStyles['@media screen and (min-width: 1440px)'],
      right: '-20px',
      width: '154px',
      fontSize: '14px',
      lineHeight: '18px',
    },
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

    padding: '3px 0',
    color:
      state.getValue()[0].label === state.data.label
        ? 'var(--text-color)'
        : 'var(--secont-text-cl)',
    background: 'none',

    '&:hover': { color: 'var(--text-color)' },
    '&:active': {
      color: 'var(--text-color)',
      backgroundColor: 'var(--secont-text-cl)',
    },
    display: 'inline-block',
    width: '111px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '@media screen and (min-width: 768px)': {
      ...baseStyles['@media screen and (min-width: 768px)'],
      padding: '4px 0',
    },
  }),
};

export default selectsStyles;
