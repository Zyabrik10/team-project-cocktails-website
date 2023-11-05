import React from 'react';

import { useState, useEffect } from 'react';
import recipes from './recipes.json';

import DrinkList from 'components/DrinksList/DrinksList';
import { Title } from 'components/Title/Title';
import Filter from 'components/DrinksList/Filter';
import selectsStyles from 'components/DrinksList/styles/selectStyles';

import css from './secDrinks.module.css';
import SelectInput from 'components/SelectInput';
import filtersAPI from 'redux/api/filtersAPI';
import makeSelectOptions from 'components/AddDrinkForm/utils/makeSelectOptions';

export default function SecDrinks() {
  const [cocktails, setCocktails] = useState([]);
  const [filter, setFilter] = useState('');
  // const [currentCountry, setCurrentCountry] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [category, setCategory] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const normalizedFilter = filter.toLowerCase();
    const filteredCocktails = recipes
      .slice(0, 20)
      .filter(item => item.drink.toLowerCase().includes(normalizedFilter));
    setCocktails(filteredCocktails);
  }, [filter]);

  const handleFilterChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  // const options = [
  //   { value: 'argentina', label: 'Argentina' },
  //   { value: 'german', label: 'German' },
  //   { value: 'japan', label: 'Japan' },
  //   { value: 'poland', label: 'Poland' },
  //   { value: 'argentina', label: 'Argentina' },
  //   { value: 'german', label: 'German' },
  //   { value: 'japan', label: 'Japan' },
  //   { value: 'poland', label: 'Poland' },
  //   { value: 'argentina', label: 'Argentina' },
  //   { value: 'german', label: 'German' },
  //   { value: 'japan', label: 'Japan' },
  //   { value: 'poland', label: 'Poland' },
  // ];
  // const getValue = () => {
  //   return currentCountry
  //     ? options.find(country => country.value === currentCountry)
  //     : '';
  // };
  // const onChange = newValue => {
  //   setCurrentCountry(newValue.value);
  // };
  const handleSelectChange = selectData => {
    const { name, value } = selectData;
    console.log(value);
    switch (name) {
      case 'ingredients': {
        setIngredients(value);
        
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
    <>
      <Title children="Drinks" />
      <div className={css.filter}>
        <Filter filter={filter} onChange={handleFilterChange} />
        {/* <Select
          onChange={onChange}
          value={getValue()}
          options={options}
          placeholder="All categories"
          styles={selectsStyles}
        /> */}
        <SelectInput
          inputName={'ingredients'}
          fetchSelectOpt={filtersAPI.useGetIngredientsQuery}
          handleSelectChange={handleSelectChange}
          makeOptArr={makeSelectOptions}
          defaultValue={ingredients}
          styles={selectsStyles}
        />
        <SelectInput
          inputName={'category'}
          fetchSelectOpt={filtersAPI.useGetCategoriesQuery}
          handleSelectChange={handleSelectChange}
          makeOptArr={makeSelectOptions}
          defaultValue={category}
          styles={selectsStyles}
        />
      </div>
      <DrinkList cocktails={cocktails} />
    </>
  );
}
