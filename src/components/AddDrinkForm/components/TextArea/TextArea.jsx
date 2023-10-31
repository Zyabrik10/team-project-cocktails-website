import { ErrorMessage } from 'formik';

const TextArea = props => {
  const { values, handleChange } = props.form;
  return (
    <>
      <textarea
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
