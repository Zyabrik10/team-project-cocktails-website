import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { SearchSvg } from './svg/SearchSvg';

export default function Filter({ filter, onChange }) {
  return (
    <div className={css.container}>
      <input
        className={css.input}
        type="text"
        placeholder="Enter the text"
        value={filter}
        onChange={onChange}
      />
      <div className={css.icon}>
        <SearchSvg />
      </div>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
