import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const SelectInput = ({
  fetchSelectOpt,
  handleSelectChange,
  inputName,
  defaultValue,
  makeOptArr,
  onBlur = null,
  styles,
}) => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState(defaultValue);

  const { data: selects, isLoading, isError, error } = fetchSelectOpt();

  useEffect(() => {
    if (!selects) {
      return;
    }

    const optArr = makeOptArr(selects);
    setOptions(optArr);

    if (!defaultValue) {
      setValue(optArr[0].label);

      handleSelectChange({
        name: inputName,
        value: optArr[0].label,
        ingredientId: optArr[0].value,
      });
    }
  }, [selects, makeOptArr, defaultValue, handleSelectChange, inputName]);

  if (isError) {
    setValue(error.toString());
    return;
  }

  const onChange = (data, { name }) => {
    setValue(data.label);

    handleSelectChange({
      name,
      value: data.label,
      ingredientId: data.value,
    });
  };

  return (
    <Select
      name={inputName}
      aria-label={`${inputName} select input`}
      value={{ label: value }}
      isLoading={isLoading}
      onChange={onChange}
      onBlur={onBlur}
      options={options}
      isSearchable={false}
      styles={styles}
    />
  );
};

export default SelectInput;

SelectInput.propTypes = {
  fetchSelectOpt: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  inputName: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  makeOptArr: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  // styles: PropTypes.object.isRequired,
};
