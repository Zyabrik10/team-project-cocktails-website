import { useState } from 'react';
import { Form, Formik, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

import { validateIngredients, validationSchema } from './utils';
import * as filtersAPI from 'redux/api/filtersAPI';

import { TextArea, AddIngredientBlock, ImageUploadInput } from './components';
import SelectInput from '../SelectInput';
import makeSelectOptions from './utils/makeSelectOptions';
import makeFormData from './utils/makeFormData';

import TextInput from './components/TextInput';
import css from './AddDrinkForm.module.css';
import globalStyles from 'css/global.module.css';
import selectsStyles from './styles/selectsStyles';
import Loader from 'components/Loader';
import { useGetPopularDrinksQuery } from 'redux/api/popularDrinksAPI';

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

  const navigate = useNavigate();

  const { refetch } = useGetPopularDrinksQuery();

  const handleSubmit = async (values, { setSubmitting }) => {
    const { itemTitle, aboutRecipe, radioSelected, recipe } = values;

    const validationMessage = validateIngredients(ingredients);

    if (validationMessage) {
      setIngrValidationErrorMess(validationMessage);

      return;
    }

    setIngrValidationErrorMess(null);

    const formData = makeFormData({
      ingredients,
      aboutRecipe,
      itemTitle,
      category,
      glass,
      radioSelected,
      recipe,
      file,
    });

    try {
      setSubmitting(true);
      await axios({
        method: 'post',
        url: 'drinks/own/add',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      await refetch();
      toast.success('Added successfully');
      navigate('/my', { replace: true });
      setSubmitting(false);
    } catch ({ response }) {
      const {
        data: { message },
      } = response;

      if (message === 'Not found') {
        throw toast.error('Something went wrong... Please try again');
      }

      if (message === 'Drink already exists') {
        throw toast.error(`Drink ${itemTitle} already exists`);
      }

      setSubmitting(false);
      throw toast.error(message);
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
      {({ isSubmitting }) => (
        <Form autoComplete="off" className={css['addForm']}>
          <div className={css['main-inputs-wrapp']}>
            <Field
              component={ImageUploadInput}
              handelFileChange={handelFileChange}
            />

            <div>
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
                  <Field
                    type="radio"
                    name="radioSelected"
                    value="Non alcoholic"
                  />
                  <span className={css['radio-checkmark']}></span>
                  Non-alcoholic
                </label>
              </div>
            </div>
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
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader
                size={7}
                margin={3}
                colorDarkTheme="#0a0a11"
                colorLightTheme="#f3f3f3"
              />
            ) : (
              'Add'
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddDrinkForm;
