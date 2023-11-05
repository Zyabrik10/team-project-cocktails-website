import React from 'react';
import Select from 'react-select';
import './react-select.css';
import { useState, useEffect } from 'react';
import recipes from './recipes.json';

import DrinkList from 'components/DrinksList/DrinksList';
import { Title } from 'components/Title/Title';
import Filter from 'components/DrinksList/Filter';

export default function SecDrinks() {
  const [cocktails, setCocktails] = useState([]);
  const [filter, setFilter] = useState('');
  const [currentCountry, setCurrentCountry] = useState('');

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

  const options = [
    { value: 'argentina', label: 'Argentina' },
    { value: 'german', label: 'German' },
    { value: 'japan', label: 'Japan' },
    { value: 'poland', label: 'Poland' },
  ];
  const getValue = () => {
    return currentCountry
      ? options.find(country => country.value === currentCountry)
      : '';
  };
  const onChange = newValue => {
    setCurrentCountry(newValue.value);
  };

  return (
    <>
      <Title children="Drinks" />
      <Filter filter={filter} onChange={handleFilterChange} />
      <Select
        classNamePrefix="custom-select"
        onChange={onChange}
        value={getValue()}
        options={options}
        placeholder="All ingredients"
      />
      <DrinkList cocktails={cocktails} />
    </>
  );
}
