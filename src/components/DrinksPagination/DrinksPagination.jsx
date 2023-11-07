import { Pagination } from '@mui/material';
import paginationStyles from './paginationStyles';

const DrinksPagination = ({ currentPage, pagesCount, refreshOnClick }) => {
  const handleChange = (_, newPage) => {
    refreshOnClick(newPage);
  };

  return (
    <Pagination
      count={pagesCount}
      page={currentPage}
      onChange={handleChange}
      color="primary"
      sx={paginationStyles}
    />
  );
};

export default DrinksPagination;
