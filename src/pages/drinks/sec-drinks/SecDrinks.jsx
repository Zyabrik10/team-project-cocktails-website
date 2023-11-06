import React from 'react';

import { useState, useEffect } from 'react';

import DrinkList from 'components/DrinksList/DrinksList';
import { Title } from 'components/Title/Title';
import Filter from 'components/DrinksList/Filter';
import selectsStyles from 'components/DrinksList/styles/selectStyles';

import css from './secDrinks.module.css';
import SelectInput from 'components/SelectInput';
import filtersAPI from 'redux/api/filtersAPI';
import { useGetDrinksPageQuery } from 'redux/api/drinksPageAPI';
import { makeIngrSelectOptions } from 'components/AddDrinkForm/utils';
import makeSelectOptions from 'components/AddDrinkForm/utils/makeSelectOptions';

export default function SecDrinks() {
  const [cocktails, setCocktails] = useState([]);
  const [filter, setFilter] = useState('');
  const [ingredients, setIngredients] = useState('All ingredients');
  const [category, setCategory] = useState('Category');

  const { data: drinks } = useGetDrinksPageQuery(ingredients);

  useEffect(() => {
    if (!drinks) {
      return;
    }
    const { data } = drinks;
    console.log(data);

    if (category !== 'Category') {
      const filter = category;
      const categorizedCocktails = data.filter(
        drink => drink.category === filter
      );
      return setCocktails(categorizedCocktails);
    }
    
    if (filter !== '') {
      const normalizedFilter = filter.toLowerCase();
      const filteredCocktails = data.filter(({ drink }) =>
        drink.toLowerCase().includes(normalizedFilter)
      );
      return setCocktails(filteredCocktails);
    }
    setCocktails(data);
  }, [drinks, filter, category]);

  const handleFilterChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const handleSelectChange = selectData => {
    const { name, value } = selectData;
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
    <section className={css.section}>
      <Title children={'Drinks'} />
      <div className={css.filter}>
        <Filter filter={filter} onChange={handleFilterChange} />

        <SelectInput
          inputName={'ingredients'}
          fetchSelectOpt={filtersAPI.useGetIngredientsQuery}
          handleSelectChange={handleSelectChange}
          makeOptArr={makeIngrSelectOptions}
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
    </section>
    </section>
  );
}
