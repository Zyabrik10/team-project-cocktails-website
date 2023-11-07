import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { SearchSvg } from './svg/SearchSvg';

export default function Filter({ value, onChange }) {
  return (
    <div className={css.container}>
      <input
        className={css.input}
        type="text"
        placeholder="Enter the text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <div className={css.icon}>
        <SearchSvg />
      </div>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
