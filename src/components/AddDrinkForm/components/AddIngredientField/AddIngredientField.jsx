import PropTypes from 'prop-types';
import { useState } from 'react';

import SelectInput from 'components/SelectInput';
import { useGetIngredientsQuery } from 'redux/api/filtersAPI';
import { makeIngrSelectOptions } from 'components/AddDrinkForm/utils';
import { ReactComponent as Close } from 'img/svg/close.svg';

import css from './AddIngredientField.module.css';
import ingredientSelectStyles from 'components/AddDrinkForm/styles/ingredientSelectStyles';

const AddIngredientField = ({
  handleIngrChange,
  ingredient,
  handleRemoveIngrField,
  handleOnBlur,
  id,
  index,
  amound,
}) => {
  const [inputAmound, setinputAmound] = useState(amound);
  const [inputIngredient, setInputIngredient] = useState(ingredient);

  const handleInputChange = e => {
    const { value, name } = e.target;
    if (name === 'amound') {
      setinputAmound(value);
      handleIngrChange({ inputName: name, id, nextAmound: value });
    }
  };

  const handleSelectChange = selectData => {
    const { name, value, ingredientId } = selectData;
    setInputIngredient(value);

    handleIngrChange({
      inputName: name,
      nextIngredient: value,
      id,
      nextingredientId: ingredientId,
    });
  };

  return (
    <div className={css['ingredient-row']}>
      <SelectInput
        handleSelectChange={handleSelectChange}
        inputName={'ingredient'}
        fetchSelectOpt={useGetIngredientsQuery}
        makeOptArr={makeIngrSelectOptions}
        defaultValue={inputIngredient}
        onBlur={handleOnBlur}
        styles={ingredientSelectStyles}
      />

      <input
        className={css['ingredient-input']}
        name="amound"
        type="text"
        value={inputAmound}
        onChange={handleInputChange}
        onBlur={handleOnBlur}
        placeholder=" "
      />
      {index ? (
        <button
          className={css['remove-btn']}
          type="button"
          onClick={() => {
            handleRemoveIngrField(id);
          }}
        >
          <Close width="18" height="18" />
        </button>
      ) : null}
    </div>
  );
};

export default AddIngredientField;

AddIngredientField.propTypes = {
  handleIngrChange: PropTypes.func.isRequired,
  handleRemoveIngrField: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  amound: PropTypes.string.isRequired,
  ingredient: PropTypes.string.isRequired,
};
