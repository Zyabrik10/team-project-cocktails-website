export const TextArea = props => {
  const { values, handleChange } = props.form;
  return (
    <textarea
      id="recipe"
      name="recipe"
      value={values.recipe}
      onChange={handleChange}
    />
  );
};
