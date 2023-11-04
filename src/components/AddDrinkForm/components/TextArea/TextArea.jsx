import { ErrorMessage } from 'formik';

import css from './TextArea.module.css';

const TextArea = props => {
  const { values, handleChange } = props.form;
  return (
    <>
      <textarea
        className={css['recipe-text-area']}
        id="recipe"
        name="recipe"
        value={values.recipe}
        onChange={handleChange}
        placeholder="Enter the recipe"
      />
      <ErrorMessage name="recipe" />
    </>
  );
};

export default TextArea;
