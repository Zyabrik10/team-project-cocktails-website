import PropTypes from 'prop-types';
import { useEffect, useReducer, useRef, useState } from 'react';
import { nanoid } from 'nanoid';

import AddIngredientField from '../AddIngredientField';
import ingredientFieldReducer from './ingredientFieldReducer';
import validateIngredients from '../utils/validateIngredients';

const initialState = [{ id: nanoid(), ingredient: '', amound: '' }];

const AddIngredientList = ({ getIngData, validationErrorMessage }) => {
  const refValidationErrorMessage = useRef(validationErrorMessage);

  const [ingrValidationMessage, setIngrValidationMessage] = useState(null);
  const [ingredientFields, dispatchIngredientFields] = useReducer(
    ingredientFieldReducer,
    initialState
  );

  useEffect(() => {
    refValidationErrorMessage.current = null;
    getIngData(ingredientFields);
  }, [ingredientFields, getIngData]);

  const handleIngrChange = ({ id, inputName, nextamound, nextIngredient }) => {
    switch (inputName) {
      case 'amound': {
        dispatchIngredientFields({
          type: 'changed_amound',
          nextamound,
          id,
        });
        return;
      }

      case 'ingredient': {
        dispatchIngredientFields({
          type: 'selected_ingredient',
          nextIngredient,
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

    setIngrValidationMessage(validationMessage);
    getIngData(ingredientFields);
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

        {ingredientFields.map((el, index) => (
          <AddIngredientField
            key={nanoid()}
            handleIngrChange={handleIngrChange}
            handleRemoveIngrField={handleRemoveIngrField}
            handleOnBlur={handleOnBlur}
            index={index}
            id={el.id}
            amound={el.amound}
            ingredient={el.ingredient}
          />
        ))}

        {(() => {
          if (ingrValidationMessage) {
            return <p>{ingrValidationMessage}</p>;
          } else if (refValidationErrorMessage.current) {
            return <p>{refValidationErrorMessage.current}</p>;
          }
          return null;
        })()}
      </div>
    </div>
  );
};

export default AddIngredientList;

AddIngredientList.propTypes = {
  getIngData: PropTypes.func.isRequired,
  validationErrorMessage: PropTypes.string,
};
