const textInputStyles = {
  margin: 0,

  '& .MuiInput-input': {
    height: 'auto',
    padding: 0,
    lineHeight: 'normal',
    textAlign: 'end',
  },

  '& .MuiFormLabel-root': {
    color: 'var(--secont-text-cl)',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 'normal',
    letterSpacing: '-0.28px',
  },

  '& .MuiFormLabel-root.Mui-focused': {
    color: 'var(--text-color)',
  },

  '& .Mui-error': {
    color: 'var(--error-message-cl)',
  },

  '.MuiFormHelperText-root': {
    fontFamily: 'Manrope',
    fontSize: '10px',
  },

  '& .MuiInput-root': {
    color: 'inherit',
    paddingBottom: '14px',

    '&:hover:not(.Mui-disabled, .Mui-error):before': {
      borderColor: 'var(--text-color)',
    },

    '&:hover::before': {
      borderColor: 'var(--text-color)',
      borderBottom: '1px solid var(--text-color)',
    },

    '&::before': {
      borderColor: 'var(--secont-text-cl)',
    },
    '&::after': {
      borderColor: 'var(--text-color)',
    },

    '@media screen and (min-width: 768px)': {
      paddingBottom: '18px',
    },
  },

  '& .Mui-error:before': {
    borderColor: '#d32f2f',
  },
};

export default textInputStyles;
