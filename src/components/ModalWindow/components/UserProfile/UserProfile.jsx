import css from './UserProfile.module.css';

import CloseSvg from '../Svg/CloseSvg';
import AddSvg from '../Svg/AddSvg';
import EdditSvg from '../Svg/EdditSvg';

import globalCss from '../../../../css/global.module.css';

import { FormInput } from 'components/Form';

export const UserProfile = ({ setClose }) => {
  function buttonHandle(e) {
    e.preventDefault();
  }

  const closeButtonHandle = () => setClose(false);

  return (
    <div className={css.userProfile}>
      <div className={css.circle1}></div>
      <div className={css.circle2}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <button
          className={`${css.closeBtn} ${globalCss['global-button']}`}
          onClick={closeButtonHandle}
        >
          <CloseSvg />
        </button>
        <div className={css.imgBox}>
          <img
            className={css.profileImg}
            src={require('../../../../img/header/user.png')}
            alt="Avatar"
          />
          <button className={`${css.addBtn} ${globalCss['global-button']}`}>
            <AddSvg />
          </button>
        </div>

        <form className={css.inputBox} action="">
          <FormInput type="text" placeholder="Enter new Name">
            <span className={css.editImg}>
              <EdditSvg />
            </span>
          </FormInput>
          <button
            onClick={buttonHandle}
            className={`${css.submitBtn} ${globalCss['custom-button']} ${globalCss['global-button']}`}
          >
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};
