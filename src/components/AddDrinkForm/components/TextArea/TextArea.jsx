import { ErrorMessage } from 'formik';

import css from './TextArea.module.css';
import validErrorMes from '../AddIngredientBlock/AddIngredientBlock.module.css';
import borderError from 'components/AddDrinkForm/AddDrinkForm.module.css';

const TextArea = props => {
  const { values, handleChange, errors, touched, setTouched } = props.form;
  return (
    <>
      <textarea
        className={`${css['recipe-text-area']} ${
          touched.recipe &&
          errors.recipe &&
          borderError['validation-error-border']
        }`}
        id="recipe"
        name="recipe"
        value={values.recipe}
        onBlur={() => setTouched({ ...touched, recipe: true })}
        onChange={handleChange}
        placeholder="Enter the recipe"
      />
      <p className={validErrorMes['validation-error']}>
        <ErrorMessage name="recipe" />
      </p>
    </>
  );
};

export default TextArea;
