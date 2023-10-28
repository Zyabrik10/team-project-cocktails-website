import PropTypes from 'prop-types';
import { useState } from 'react';

const AddIngredientField = ({
  handleIngrChange,
  handleRemoveIngrField,
  handleOnBlur,
  id,
  index,
  amound,
  ingredient,
}) => {
  const [inputAmound, setinputAmound] = useState(amound);
  const [inputIngredient, setInputIngredient] = useState(ingredient);

  const handleInputChange = e => {
    const { value, name } = e.target;
    if (name === 'amound') {
      setinputAmound(value);
      handleIngrChange({ inputName: name, id, nextamound: value });
    }

    if (name === 'ingredient') {
      setInputIngredient(value);
      handleIngrChange({ inputName: name, id, nextIngredient: value });
    }
  };

  return (
    <div>
      <input
        name="ingredient"
        type="select"
        value={inputIngredient}
        onChange={handleInputChange}
        onBlur={handleOnBlur}
      />

      <input
        name="amound"
        type="text"
        value={inputAmound}
        onChange={handleInputChange}
        onBlur={handleOnBlur}
      />
      {index ? (
        <button
          type="button"
          onClick={() => {
            handleRemoveIngrField(id);
          }}
        >
          Remove
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
