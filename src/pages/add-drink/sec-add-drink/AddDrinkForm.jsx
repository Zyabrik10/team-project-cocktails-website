import { Form, Formik, Field } from 'formik';
import { useState } from 'react';
import { TextArea } from './TextArea';

export const AddDrinkForm = () => {
  const [ingredientsField, setIngredientsField] = useState([
    { ingredient: '', amount: '' },
  ]);

  const initialValues = {
    itemTitle: '',
    aboutRecipe: '',
    category: '',
    glass: '',
    picked: '',
    recipe: '',
  };

  const handleSubmit = (values, actions) => {
    console.log('values', values);
  };

  const onCategoryDropSelected = () => {};

  const onGlassDropSelected = () => {};

  const removeIngredientsField = () => {};

  const handleAddDeductIngrField = e => {
    switch (e.target.textContent) {
      case '+':
        return setIngredientsField(prew => [
          ...prew,
          { ingredient: '', amount: '' },
        ]);

      case '-':
        return setIngredientsField(prew => {
          const newArr = [...prew];
          newArr.pop();
          return newArr;
        });

      default:
        return;
    }
  };

  const handleRemoveIngrField = index => {
    setIngredientsField(prew => {
      const newArr = [...prew];
      newArr.splice(index, 1);
      return newArr;
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="image">Add image</label>
        <Field
          id="image"
          name="image"
          type="file"
          // onChange={formik.handleChange}
        />

        <label htmlFor="itemTitle">Enter item title</label>
        <Field
          id="itemTitle"
          name="itemTitle"
          type="text"
          // onChange={handleChange}
          // value={formik.values.firstName}
        />

        <label htmlFor="aboutRecipe">Enter about recipe</label>
        <Field
          id="aboutRecipe"
          name="aboutRecipe"
          type="text"
          // onChange={handleChange}
        />

        <label htmlFor="category">Category</label>
        <Field
          id="category"
          name="category"
          type="select"
          onChange={onCategoryDropSelected}
          // value={formik.values.firstName}
        />

        <label htmlFor="glass">Glass</label>
        <Field
          id="glass"
          name="glass"
          type="select"
          onChange={onGlassDropSelected}
          // value={formik.values.firstName}
        />

        {/* Radio buttons */}
        <div role="group" aria-labelledby="radio-group">
          <label>
            <Field type="radio" name="picked" value="Alcoholic" />
            One
          </label>
          <label>
            <Field type="radio" name="picked" value="Non-alcoholic" />
            Two
          </label>
        </div>

        {/* Dynemic ingredient fields */}
        <div>
          <h3>Ingredients</h3>

          <div>
            <button
              onClick={handleAddDeductIngrField}
              type="button"
              disabled={ingredientsField.length < 2}
            >
              -
            </button>
            <span>1</span>
            <button onClick={handleAddDeductIngrField} type="button">
              +
            </button>
          </div>

          {ingredientsField.map((el, index) => (
            <div key={index}>
              <Field
                name="ingredient"
                type="select"
                onChange={onGlassDropSelected}
                // value={formik.values.firstName}
              />

              <Field
                name="amount"
                type="text"
                onChange={onGlassDropSelected}
                // value={formik.values.firstName}
              />
              {index ? (
                <button
                  type="button"
                  onClick={() => handleRemoveIngrField(index)}
                >
                  Remove
                </button>
              ) : null}
            </div>
          ))}
        </div>

        <div>
          <h3>Recipe Preparation</h3>
          <Field component={TextArea} placeholder="Enter the recipe" />
        </div>

        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
};
