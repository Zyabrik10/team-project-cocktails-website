import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import textInputStyles from './textInputStyles';

const TextInput = props => {
  const {
    form: { values, touched, errors, handleChange, handleBlur },
    inputName,
    title,
    label,
  } = props;

  return (
    <TextField
      id={inputName}
      type="text"
      name={inputName}
      title={title}
      label={label}
      value={values[inputName]}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={touched[inputName] ? errors[inputName] : ''}
      error={touched[inputName] && Boolean(errors[inputName])}
      margin="dense"
      variant="standard"
      size="small"
      fullWidth
      sx={textInputStyles}
    />
  );
};

export default TextInput;

TextInput.propTypes = {
  props: PropTypes.shape({
    form: PropTypes.object.isRequired,
    inputName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
};
