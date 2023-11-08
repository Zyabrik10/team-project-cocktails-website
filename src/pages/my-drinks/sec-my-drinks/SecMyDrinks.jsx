import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import {
  useGetMyDrinksQuery,
  useRemoveMyDrinkMutation,
} from 'redux/api/myDrinksAPI';
import { useMediaQuery } from 'hooks';

import { Title } from 'components/Title/Title';
import { DrinksList } from 'components/MyDrinksComponent/DrinksList';
import { NotFoundMyDrinks } from 'components/MyDrinksComponent/NotFoundMyDrinks';
import DrinksPagination from 'components/DrinksPagination';

import css from './SecMyDrinks.module.css';
import globalCss from 'css/global.module.css';
import paginationStyles from 'pages/drinks/sec-drinks/secDrinks.module.css';

export const SecMyDrinks = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [drinks, setDrinks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const { page = 1, limit = 1 } = params;

  const { data: myDrinks } = useGetMyDrinksQuery(
    { page, limit },
    { refetchOnMountOrArgChange: true }
  );
  const [removeMyDrink] = useRemoveMyDrinkMutation();
  // console.log(myDrinks);

  const isDesktop = useMediaQuery('(min-width: 1440px)');

  useEffect(() => {
    if (!myDrinks) {
      return;
    }

    let limit = 8;
    const { result, total } = myDrinks;
    if (isDesktop) {
      limit = 9;
    }

    setPagesCount(Math.ceil(total / limit));

    if (currentPage !== 1 && result.length === 0) {
      setCurrentPage(prew => prew - 1);
    }

    setSearchParams({
      ...params,
      page: currentPage,
      limit,
    });

    setDrinks(result);
  }, [myDrinks, currentPage, isDesktop, params, setSearchParams]);

  const handleDelete = async drinkId => {
    const responce = await removeMyDrink(drinkId);

    if (responce.error) {
      throw toast.error('something went wrong');
    }

    toast.success('Deleted from your drinks successful');
  };

  const handlePagination = page => {
    setCurrentPage(page);
    setSearchParams({ ...params, page });
  };

  return (
    <div className={`${globalCss.container} ${css.section}`}>
      <Title>My drinks</Title>
      {drinks.length ? (
        <DrinksList drinks={drinks} handleDelete={handleDelete} />
      ) : (
        <NotFoundMyDrinks children={`You haven't added any cocktails yet`} />
      )}
      {drinks.length !== 0 && (
        <DrinksPagination
          className={paginationStyles['pagination']}
          currentPage={currentPage}
          pagesCount={pagesCount}
          refreshOnClick={handlePagination}
        />
      )}
    </div>
  );
};
