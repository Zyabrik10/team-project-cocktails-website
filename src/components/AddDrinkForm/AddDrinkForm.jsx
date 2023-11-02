import { useState } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import axios from 'axios';

import { validateIngredients, validationSchema } from './utils';
import * as filtersAPI from 'redux/api/filtersAPI';

import { TextArea, AddIngredientList, ImageUploadInput } from './components';
import SelectInput from '../SelectInput';
import makeSelectOptions from './utils/makeSelectOptions';

import css from './AddDrinkForm.module.css';
import TextInput from './components/TextInput';

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

  const handleSubmit = values => {
    const { itemTitle, aboutRecipe, radioSelected, recipe } = values;

    const validationMessage = validateIngredients(ingredients);
    if (validationMessage) {
      setIngrValidationErrorMess(validationMessage);
      return;
    }

    setIngrValidationErrorMess(null);

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
    formData.append('drinkThumb', file ?? null);

    succesIngredients.forEach((item, index) => {
      for (const key in item) {
        formData.append(`ingredients[${index}][${key}]`, item[key]);
      }
    });

    for (const key of formData.keys()) {
      console.log({ [key]: formData.get(key) });
    }

    axios
      .post('/drinks/own/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => {
        console.log('res', res);
        console.log('Drink added succesful');
      })
      .catch(e => console.log(e));
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
        return;
      }
      case 'category': {
        setCategory(value);
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
        <Field
          component={ImageUploadInput}
          handelFileChange={handelFileChange}
        />

        <Field
          component={TextInput}
          inputName={'itemTitle'}
          title={'Name of your drink'}
          label={'Enter item title'}
        />

        <Field
          component={TextInput}
          inputName={'aboutRecipe'}
          title={'Give short description'}
          label={'Enter about recipe'}
        />

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
        </label>

        {/* Radio buttons */}
        <div role="group" aria-labelledby="radio-group">
          <label>
            <Field type="radio" name="radioSelected" value="Alcoholic" />
            Alcoholic
          </label>
          <label>
            <Field type="radio" name="radioSelected" value="Non alcoholic" />
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
