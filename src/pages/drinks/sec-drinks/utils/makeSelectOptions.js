const makeSelectOptions = ({ data }) => {
  const optArr = data.map(el => ({
    value: el.toString().toLowerCase(),
    label: el,
  }));

  return [{ label: 'All categories' }, ...optArr];
};

export default makeSelectOptions;
