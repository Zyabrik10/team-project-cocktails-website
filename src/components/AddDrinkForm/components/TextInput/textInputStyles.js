const textInputStyles = {
  margin: 0,
  marginBottom: '31px',

  '& .MuiInput-input': {
    height: 'auto',
  },

  '& .MuiFormLabel-root': {
    color: 'var(--secont-text-cl)',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 'normal',
    letterSpacing: '-0.28px',
  },

  '& .MuiInput-root': {
    color: 'inherit',
    paddingBottom: '14px',

    '&:hover::before': {
      borderColor: 'var(--text-color)',
    },

    '&::before': {
      borderColor: 'var(--secont-text-cl)',
    },
    '&::after': {
      borderColor: 'var(--text-color)',
    },
  },

  '& .Mui-error:before': {
    borderColor: '#d32f2f',
  },
};

export default textInputStyles;
