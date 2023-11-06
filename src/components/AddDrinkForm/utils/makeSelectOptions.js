const makeSelectOptions = ({ data }) => {
  const optArr = data.map(el => ({
    value: el.toString().toLowerCase(),
    label: el,
  }));

  return optArr;
};

export default makeSelectOptions;
