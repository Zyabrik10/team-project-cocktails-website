import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { FavList } from 'components/FavList/FavList';
import { Title } from 'components/Title/Title';
import { FavNotFound } from 'components/FavList/FavNotFound';
import DrinksPagination from 'components/DrinksPagination';

import css from './SecFavorites.module.css';
import globalCss from 'css/global.module.css';
import paginationStyles from 'pages/drinks/sec-drinks/secDrinks.module.css';
import { useGetFavoritesQuery } from 'redux/api/favoritesAPI';
import { useMediaQuery } from 'hooks';

export const SecFavorites = ({ handleDelete }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const { page = 1, limit = 1 } = params;

  const { data: fetchedFavorites } = useGetFavoritesQuery({ limit, page });

  const isDesktop = useMediaQuery('(min-width: 1440px)');

  useEffect(() => {
    if (!fetchedFavorites) {
      return;
    }

    let limit = 8;
    const { result, totalHits } = fetchedFavorites;
    if (isDesktop) {
      limit = 9;
    }

    // const countLimit = Math.ceil(total / limit);
    setPagesCount(Math.ceil(totalHits / limit));

    if (currentPage !== 1 && result.length === 0) {
      setCurrentPage(prew => prew - 1);
    }

    setSearchParams({
      ...params,
      page: currentPage,
      limit,
    });

    setFavorites(result);
  }, [fetchedFavorites, currentPage, isDesktop, params, setSearchParams]);

  const handlePagination = page => {
    setCurrentPage(page);
    setSearchParams({ ...params, page });
  };

  return (
    <div className={`${globalCss.container}`}>
      <section className={css.section}>
        <Title>Favorites</Title>
        {favorites.length ? (
          <FavList favorites={favorites} handleDelete={handleDelete} />
        ) : (
          <FavNotFound />
        )}

        {favorites.length !== 0 && (
          <DrinksPagination
            className={paginationStyles['pagination']}
            currentPage={currentPage}
            pagesCount={pagesCount}
            refreshOnClick={handlePagination}
          />
        )}
      </section>
    </div>
  );
};
