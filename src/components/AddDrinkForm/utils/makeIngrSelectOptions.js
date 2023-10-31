const makeIngrSelectOptions = ({ data }) => {
  const optArr = data.map(el => ({
    value: el._id,
    label: el.title,
  }));

  return optArr;
};

export default makeIngrSelectOptions;
