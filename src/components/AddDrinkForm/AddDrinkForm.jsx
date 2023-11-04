import { useState } from 'react';
import { Form, Formik, Field } from 'formik';
import axios from 'axios';

import { validateIngredients, validationSchema } from './utils';
import * as filtersAPI from 'redux/api/filtersAPI';

import { TextArea, AddIngredientBlock, ImageUploadInput } from './components';
import SelectInput from '../SelectInput';
import makeSelectOptions from './utils/makeSelectOptions';

import TextInput from './components/TextInput';
import css from './AddDrinkForm.module.css';
import globalStyles from 'css/global.module.css';
import selectsStyles from './styles/selectsStyles';

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

  const handleSubmit = async values => {
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
    formData.append('drinkThumb', file);

    succesIngredients.forEach((item, index) => {
      for (const key in item) {
        formData.append(`ingredients[${index}][${key}]`, item[key]);
      }
    });

    for (const key of formData.keys()) {
      console.log({ [key]: formData.get(key) });
    }

    try {
      await axios({
        method: 'post',
        url: 'drinks/own/add',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (error) {
      console.log(error);
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
      <Form autoComplete="off" className={css['addForm']}>
        <Field
          component={ImageUploadInput}
          handelFileChange={handelFileChange}
        />

        <div className={css['inputs-wrapp']}>
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

          <label htmlFor="category" className={css['select-labels-wrap']}>
            <span className={css['select-labels']}>Category</span>

            <Field
              component={SelectInput}
              inputName={'category'}
              fetchSelectOpt={filtersAPI.useGetCategoriesQuery}
              handleSelectChange={handleSelectChange}
              makeOptArr={makeSelectOptions}
              defaultValue={category}
              styles={selectsStyles}
            />
          </label>

          <label htmlFor="glass" className={css['select-labels-wrap']}>
            <span className={css['select-labels']}>Glass</span>
            <Field
              component={SelectInput}
              inputName={'glass'}
              fetchSelectOpt={filtersAPI.useGetGlassesQuery}
              handleSelectChange={handleSelectChange}
              makeOptArr={makeSelectOptions}
              defaultValue={glass}
              styles={selectsStyles}
            />
          </label>
        </div>

        {/* Radio buttons */}
        <div
          className={css['radio-container']}
          role="group"
          aria-labelledby="radio-group"
        >
          <label
            className={css['radio-label']}
            title="Type of the drink Alcoholic"
          >
            <Field type="radio" name="radioSelected" value="Alcoholic" />
            <span className={css['radio-checkmark']}></span>
            Alcoholic
          </label>

          <label
            className={css['radio-label']}
            title="Type of the drink Non-alcoholic"
          >
            <Field type="radio" name="radioSelected" value="Non alcoholic" />
            <span className={css['radio-checkmark']}></span>
            Non-alcoholic
          </label>
        </div>
        {/* Dynemic ingredient fields */}
        <AddIngredientBlock
          handleIngredientChange={handleIngredientChange}
          onSubmitErrorMessage={ingrValidationErrorMess}
        />

        <div className={css['recipe-container']}>
          <h3 className={css['title']}>Recipe Preparation</h3>
          <Field component={TextArea} />
        </div>

        <button
          className={`${globalStyles['custom-button']} ${css['subm-btn']}`}
          type="submit"
        >
          Add
        </button>
      </Form>
    </Formik>
  );
};

export default AddDrinkForm;
