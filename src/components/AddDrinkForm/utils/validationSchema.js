import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  itemTitle: Yup.string().required('Title required'),
  aboutRecipe: Yup.string().required('About recipe required'),
  recipe: Yup.string().required('Recipe required'),
});

export default validationSchema;
