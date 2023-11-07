const makeIngrSelectOptions = ({ data }) => {
  const optArr = data.map(el => ({
    value: el._id,
    label: el.title,
  }));

  return [{ label: 'All ingredients' }, ...optArr];
};

export default makeIngrSelectOptions;
