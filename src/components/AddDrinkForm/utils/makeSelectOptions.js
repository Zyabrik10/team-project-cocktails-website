const makeSelectOptions = ({ data }) => {
  const optArr = data.map(el => ({
    value: el.toLowerCase(),
    label: el,
  }));

  return optArr;
};

export default makeSelectOptions;
