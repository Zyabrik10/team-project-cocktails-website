import PropTypes from 'prop-types';
import { useEffect, useReducer, useState } from 'react';
import { nanoid } from 'nanoid';

import AddIngredientField from '../AddIngredientField';
import ingredientFieldReducer from './ingredientFieldReducer';
import { validateIngredients } from '../../utils';

const initialState = [
  { id: nanoid(), ingredientId: '', ingredient: '', amound: '' },
];

const AddIngredientList = ({
  handleIngredientChange,
  onSubmitErrorMessage,
}) => {
  const [ingredientFields, dispatchIngredientFields] = useReducer(
    ingredientFieldReducer,
    initialState
  );
  const [ingrValidationMessage, setIngrValidationMessage] = useState(null);
  const [isSubmitErrorMessage, setIsSubmitErrorMessage] = useState(true);

  useEffect(() => {
    handleIngredientChange(ingredientFields);
  }, [ingredientFields, handleIngredientChange]);

  const handleIngrChange = ({
    id,
    nextingredientId,
    inputName,
    nextAmound,
    nextIngredient,
  }) => {
    switch (inputName) {
      case 'amound': {
        dispatchIngredientFields({
          type: 'changed_amound',
          nextAmound,
          id,
        });
        return;
      }

      case 'ingredient': {
        dispatchIngredientFields({
          type: 'selected_ingredient',
          nextIngredient,
          nextingredientId,
          id,
        });
        return;
      }

      default:
        return;
    }
  };

  const handleAddDeductIngrField = e => {
    switch (e.target.textContent) {
      case '+':
        return dispatchIngredientFields({ type: 'add_element' });

      case '-':
        return dispatchIngredientFields({ type: 'remove_element' });

      default:
        return;
    }
  };

  const handleRemoveIngrField = id => {
    dispatchIngredientFields({
      type: 'remove_by_id',
      id,
    });
  };

  const handleOnBlur = () => {
    const validationMessage = validateIngredients(ingredientFields);
    if (validationMessage) {
      setIngrValidationMessage(validationMessage);
      return;
    }

    setIsSubmitErrorMessage(false);
    setIngrValidationMessage(null);
    handleIngredientChange(ingredientFields);
  };

  return (
    <div>
      <div>
        <h3>Ingredients</h3>

        <div>
          <button
            onClick={handleAddDeductIngrField}
            type="button"
            disabled={ingredientFields.length < 2}
          >
            -
          </button>

          <span>{ingredientFields.length}</span>

          <button
            onClick={handleAddDeductIngrField}
            type="button"
            disabled={ingredientFields.length >= 10}
          >
            +
          </button>
        </div>

        {ingredientFields.map((el, index) => {
          const { ingredient, id, amound } = el;
          return (
            <AddIngredientField
              key={nanoid()}
              ingredient={ingredient}
              handleIngrChange={handleIngrChange}
              handleRemoveIngrField={handleRemoveIngrField}
              handleOnBlur={handleOnBlur}
              index={index}
              id={id}
              amound={amound}
            />
          );
        })}

        {(() => {
          if (ingrValidationMessage) {
            return <p>{ingrValidationMessage}</p>;
          } else if (isSubmitErrorMessage && onSubmitErrorMessage) {
            return <p>{onSubmitErrorMessage}</p>;
          }
          return null;
        })()}
      </div>
    </div>
  );
};

export default AddIngredientList;

AddIngredientList.propTypes = {
  handleIngredientChange: PropTypes.func.isRequired,
  onSubmitErrorMessage: PropTypes.string,
};
