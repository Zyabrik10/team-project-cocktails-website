import PropTypes from 'prop-types';
import css from './Filter.module.css'

export default function Filter({ filter, onChange }) {
  return (
    <div className={css.container}>
      <input className={css.input} type="text" placeholder="Enter the text" value={filter} onChange={onChange} />
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};