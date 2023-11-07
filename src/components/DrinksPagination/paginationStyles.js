const paginationStyles = {
  '& .MuiPagination-ul': {
    display: 'flex',
    justifyContent: 'center',
  },

  '& .MuiPaginationItem-root': {
    color: 'var(--text-color)',
    fontFamily: 'Manrope',
    fontSize: '12px',
    fontWeight: '500',
  },
  '& .MuiPaginationItem-root:hover': {
    color: '#f3f3f3',
    backgroundColor: 'var(--button-bg-pagination)',
  },
  '& .MuiPaginationItem-root.Mui-selected': {
    color: '#f3f3f3',
    backgroundColor: 'var(--button-bg-pagination)',
  },
};

export default paginationStyles;
