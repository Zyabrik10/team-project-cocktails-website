import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  itemTitle: Yup.string().required('Title required'),
  aboutRecipe: Yup.string(),
  category: Yup.string().required('Category required'),
  glass: Yup.string().required('Type of the glass required'),
  recipe: Yup.string(),
});

export default validationSchema;
