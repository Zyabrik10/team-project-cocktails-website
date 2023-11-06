const makeFormData = ({
  ingredients,
  aboutRecipe,
  itemTitle,
  category,
  glass,
  radioSelected,
  recipe,
  file,
}) => {
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

  return formData;
};

export default makeFormData;
