import PropTypes from 'prop-types';
import { useEffect, useReducer, useState } from 'react';
import { nanoid } from 'nanoid';

import AddIngredientField from '../AddIngredientField';
import ingredientFieldReducer from './ingredientFieldReducer';
import { validateIngredients } from '../../utils';

import css from './AddIngredientBlock.module.css';
import addFormTitlesStyles from 'components/AddDrinkForm/AddDrinkForm.module.css';
import { ReactComponent as Plus } from 'img/svg/plus.svg';
import { ReactComponent as Minus } from 'img/svg/minus.svg';

const initialState = [
  { id: nanoid(), ingredientId: '', ingredient: '', amound: '' },
];

const AddIngredientBlock = ({
  handleIngredientChange,
  onSubmitErrorMessage,
}) => {
  const [ingredientFields, dispatchIngredientFields] = useReducer(
    ingredientFieldReducer,
    initialState
  );
  const [ingrValidationMessage, setIngrValidationMessage] = useState(null);

  useEffect(() => {
    handleIngredientChange(ingredientFields);

    setIngrValidationMessage(onSubmitErrorMessage);

    const isError = ingredientFields.every(
      el => el.amound !== '' && el.ingredient !== '' && el.ingredientId !== ''
    );

    if (isError) {
      setIngrValidationMessage(null);
    }
  }, [ingredientFields, handleIngredientChange, onSubmitErrorMessage]);

  useEffect(() => {
    return () => {
      dispatchIngredientFields({
        type: 'clear_state',
      });
    };
  }, []);

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
    switch (e.currentTarget.textContent) {
      case 'Plus':
        return dispatchIngredientFields({ type: 'add_element' });

      case 'Minus':
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

    setIngrValidationMessage(null);
    handleIngredientChange(ingredientFields);
  };

  return (
    <div className={css['ingredients-block']}>
      <div className={css['title-container']}>
        <h3 className={addFormTitlesStyles['title']}>Ingredients</h3>

        <div className={css['input-count-container']}>
          <button
            className={css['input-count-btn']}
            onClick={handleAddDeductIngrField}
            type="button"
            disabled={ingredientFields.length < 2}
          >
            <Minus width="16" height="16" />
          </button>

          <span>{ingredientFields.length}</span>

          <button
            className={css['input-count-btn']}
            onClick={handleAddDeductIngrField}
            type="button"
            disabled={ingredientFields.length >= 10}
          >
            <Plus width="16" height="16" />
          </button>
        </div>
      </div>

      <ul className={css['ingredients-list']}>
        {ingredientFields.map((el, index) => {
          const { ingredient, id, amound } = el;
          return (
            <li key={nanoid()}>
              <AddIngredientField
                ingredient={ingredient}
                handleIngrChange={handleIngrChange}
                handleRemoveIngrField={handleRemoveIngrField}
                handleOnBlur={handleOnBlur}
                index={index}
                id={id}
                amound={amound}
                isErrorMess={ingrValidationMessage}
              />
            </li>
          );
        })}
      </ul>

      {ingrValidationMessage && (
        <p className={css['validation-error']}>{ingrValidationMessage}</p>
      )}
    </div>
  );
};

export default AddIngredientBlock;

AddIngredientBlock.propTypes = {
  handleIngredientChange: PropTypes.func.isRequired,
  onSubmitErrorMessage: PropTypes.string,
};
