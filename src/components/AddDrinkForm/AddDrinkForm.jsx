import { useState } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';

import TextArea from './TextArea';
import AddIngredientList from './AddIngredientList';

import css from './AddDrink.module.css';
import validateIngredients from './utils/validateIngredients';
import validationSchema from './utils/validationSchema';

const AddDrinkForm = () => {
  const [ingredients, setIngredients] = useState([]);
  const [ingrValidationErrorMess, setIngrValidationErrorMess] = useState(null);

  const initialValues = {
    itemTitle: '',
    aboutRecipe: '',
    category: '',
    glass: '',
    radioSelected: '',
    recipe: '',
  };

  const handleSubmit = (values, actions) => {
    const validationMessage = validateIngredients(ingredients);
    if (validationMessage) {
      setIngrValidationErrorMess(validationMessage);
      return;
    }

    setIngrValidationErrorMess(validationMessage);
    const succesDataArr = ingredients.filter(
      el => el.amound !== '' && el.ingredient !== ''
    );
    const result = { ...values, ingredients: succesDataArr };
    console.log('result', result);
  };

  // const onCategoryDropSelected = () => {};

  // const onGlassDropSelected = () => {};

  const getIngData = data => {
    setIngredients(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.addForm}>
        <label htmlFor="image">Add image</label>
        <Field id="image" name="image" type="file" />

        <label htmlFor="itemTitle">Enter item title</label>
        <Field id="itemTitle" name="itemTitle" type="text" />
        <ErrorMessage name="itemTitle" />

        <label htmlFor="aboutRecipe">Enter about recipe</label>
        <Field id="aboutRecipe" name="aboutRecipe" type="text" />
        <ErrorMessage name="aboutRecipe" />

        <label htmlFor="category">Category</label>
        <Field
          id="category"
          name="category"
          type="select"
          // onChange={onCategoryDropSelected}
        />
        <ErrorMessage name="category" />

        <label htmlFor="glass">Glass</label>
        <Field
          id="glass"
          name="glass"
          type="select"
          // onChange={onGlassDropSelected}
        />
        <ErrorMessage name="glass" />

        {/* Radio buttons */}
        <div role="group" aria-labelledby="radio-group">
          <label>
            <Field
              type="radio"
              name="radioSelected"
              value="Alcoholic"
              checked
            />
            Alcoholic
          </label>
          <label>
            <Field type="radio" name="radioSelected" value="Non-alcoholic" />
            Non-alcoholic
          </label>
        </div>

        {/* Dynemic ingredient fields */}
        <AddIngredientList
          getIngData={getIngData}
          validationErrorMessage={ingrValidationErrorMess}
        />

        <div>
          <h3>Recipe Preparation</h3>
          <Field component={TextArea} />
        </div>

        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
};

export default AddDrinkForm;
