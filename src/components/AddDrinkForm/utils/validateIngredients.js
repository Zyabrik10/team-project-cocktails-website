const ERROR_MESSAGES = {
  noIngredient: 'Must be at least one ingredient',
  oneFieldEmpty: 'Each started line must be filled',
};

const validateIngredients = data => {
  const filteredArr = data.filter(
    el => el.amound !== '' || el.ingredient !== ''
  );
  if (filteredArr.length === 0) {
    return ERROR_MESSAGES.noIngredient;
  }

  const isEnyFildEmpty = filteredArr.some(
    el => el.amound === '' || el.ingredient === ''
  );
  if (isEnyFildEmpty) {
    return ERROR_MESSAGES.oneFieldEmpty;
  }
  return;
};

export default validateIngredients;
