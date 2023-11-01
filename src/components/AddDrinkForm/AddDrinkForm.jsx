import {  useState } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';

import css from './AddDrink.module.css';
import { validateIngredients, validationSchema } from './utils';
import * as filtersAPI from './filtersAPI';

import { TextArea, AddIngredientList, ImageUploadInput } from './components';
import SelectInput from '../SelectInput';
import makeSelectOptions from './utils/makeSelectOptions';

const initialValues = {
  itemTitle: '',
  aboutRecipe: '',
  radioSelected: 'Alcoholic',
  recipe: '',
};

const AddDrinkForm = () => {
  const [ingredients, setIngredients] = useState([]);
  const [file, setFile] = useState(null);
  const [glass, setGlass] = useState('');
  const [category, setCategory] = useState('');

  const [ingrValidationErrorMess, setIngrValidationErrorMess] = useState(null);
  const [isGlassSelected, setIsGlassSelected] = useState(true);
  const [isCategorySelected, setIsCategorySelected] = useState(true);

  const handleSubmit = (values, actions) => {
    const { itemTitle, aboutRecipe, radioSelected, recipe } = values;

    const validationMessage = validateIngredients(ingredients);
    console.log(validationMessage);
    if (validationMessage) {
      setIngrValidationErrorMess(validationMessage);
      return;
    }

    if (!category) {
      setIsCategorySelected(false);
      return;
    }

    if (!glass) {
      setIsGlassSelected(false);
      return;
    }

    setIngrValidationErrorMess(null);
    setIsCategorySelected(true);
    setIsGlassSelected(true);

    const succesIngredients = ingredients
      .filter(
        el => el.amound !== '' && el.ingredient !== '' && el.ingredientId !== ''
      )
      .map(el => ({
        ingredientId: el.ingredientId,
        measure: el.amound.trim(),
        title: el.ingredient.trim(),
      }));

    const formData = new FormData();
    formData.append('drink', itemTitle.trim());
    formData.append('description', aboutRecipe.trim());
    formData.append('category', category);
    formData.append('glass', glass);
    formData.append('alcoholic', radioSelected);
    formData.append('instructions', recipe.trim());
    formData.append('drinkThumb', file ?? JSON.stringify({}));
    formData.append('ingredients', JSON.stringify(succesIngredients));

    for (const key of formData.keys()) {
      console.log({ [key]: formData.get(key) });
    }
  };

  const handleIngredientChange = ingrData => {
    setIngredients(ingrData);
  };

  const handelFileChange = file => {
    setFile(file);
  };

  const handleSelectChange = selectData => {
    const { name, value } = selectData;
    switch (name) {
      case 'glass': {
        setGlass(value);
        setIsGlassSelected(true);
        return;
      }
      case 'category': {
        setCategory(value);
        setIsCategorySelected(true);
        return;
      }
      default:
        return;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={css.addForm}>
        <label htmlFor="image">Add image</label>
        <Field
          component={ImageUploadInput}
          handelFileChange={handelFileChange}
        />

        <label htmlFor="itemTitle">Enter item title</label>
        <Field id="itemTitle" name="itemTitle" type="text" />
        <ErrorMessage name="itemTitle" />

        <label htmlFor="aboutRecipe">Enter about recipe</label>
        <Field id="aboutRecipe" name="aboutRecipe" type="text" />
        <ErrorMessage name="aboutRecipe" />

        <label htmlFor="category">
          Category
          <Field
            component={SelectInput}
            inputName={'category'}
            fetchSelectOpt={filtersAPI.useGetCategoriesQuery}
            handleSelectChange={handleSelectChange}
            makeOptArr={makeSelectOptions}
            defaultValue={category}
          />
          {!isCategorySelected && <p>Select option</p>}
        </label>

        <label htmlFor="glass">
          Glass
          <Field
            component={SelectInput}
            inputName={'glass'}
            fetchSelectOpt={filtersAPI.useGetGlassesQuery}
            handleSelectChange={handleSelectChange}
            makeOptArr={makeSelectOptions}
            defaultValue={glass}
          />
          {!isGlassSelected && <p>Select option</p>}
        </label>

        {/* Radio buttons */}
        <div role="group" aria-labelledby="radio-group">
          <label>
            <Field type="radio" name="radioSelected" value="Alcoholic" />
            Alcoholic
          </label>
          <label>
            <Field type="radio" name="radioSelected" value="Non-alcoholic" />
            Non-alcoholic
          </label>
        </div>

        {/* Dynemic ingredient fields */}
        <AddIngredientList
          handleIngredientChange={handleIngredientChange}
          onSubmitErrorMessage={ingrValidationErrorMess}
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
