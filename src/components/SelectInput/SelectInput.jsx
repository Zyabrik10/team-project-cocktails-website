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
      // menuIsOpen
      styles={{
        control: (baseStyles, { selectProps }) => ({
          ...baseStyles,
          height: '34px',
          minHeight: '34px',
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          borderBottom: `1px solid ${
            selectProps.menuIsOpen
              ? 'var(--text-color)'
              : 'var(--secont-text-cl)'
          }`,
          borderRadius: 0,
          '&:hover': {
            borderColor: 'var(--text-color)',
          },
        }),
        dropdownIndicator: (baseStyles, { selectProps }) => ({
          ...baseStyles,
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
        singleValue: baseStyles => ({
          ...baseStyles,
          color: 'var(--text-color)',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '1',
        }),
        menu: baseStyles => ({
          ...baseStyles,
          top: 30,
          right: 0,
          width: '131px',
          padding: '7px 10px',
          margin: 0,
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '1.33',
          color: 'var(--secont-text-cl)',
          backgroundColor: 'var(--select-menu-bg)',
        }),
        menuList: baseStyles => ({
          ...baseStyles,
          padding: 0,
        }),
        option: baseStyles => ({
          ...baseStyles,
          padding: '3px 0',
          backgroundColor: 'none',
          '&:hover': { color: 'var(--text-color)' },
          '&:active': {
            color: 'var(--text-color)',
            backgroundColor: 'var(--secont-text-cl)',
          },
        }),
      }}
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
};
