import css from './Form.module.css';
import React from 'react';

export const Form = () => {
  return (
    <div className={css.container}>
      <form>
              <input className={css.textInput} type="text" />
              <select className={css.select_1} name="select">
                  <option value="value 1">Значення 1</option>
                  <option value="value 2">Значення 2</option>
                  <option value="value 3">Значення 3</option>
                  <option value="value 4">Значення 4</option>
              </select>
              <select className={css.select_1} name="select">
                  <option value="value 1">Значення 1</option>
                  <option value="value 2">Значення 2</option>
                  <option value="value 3">Значення 3</option>
                  <option value="value 4">Значення 4</option>
              </select>
      </form>
    </div>
  );
};
