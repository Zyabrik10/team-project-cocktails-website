import css from './LogoutAlert.module.css';
import globalCss from '../../../../css/global.module.css';

import CloseSvg from '../Svg/CloseSvg';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signout } from 'redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

export const LogoutAlert = ({ setClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector(selectUser);

  const closeButtonHandle = () => setClose(false);

  const buttonHandle = async () => {
    await dispatch(signout(token));
    navigate("/welcome");
  }

  return (
    <div className={css.profileAlert}>
      <button
        className={`${css.closeBtn} ${globalCss['global-button']}`}
        onClick={closeButtonHandle}
      >
        <CloseSvg />
      </button>
      <p className={css.alertTitle}>Are you sure you want to log out?</p>
      <div className={css.btnBox}>
        <button
          onClick={buttonHandle}
          className={`${css.logoutBtn} ${globalCss['global-button']} ${globalCss['custom-button']}`}
        >
          Log out
        </button>
        <button
          className={`${css.cancelBtn} ${globalCss['global-button']} ${globalCss['custom-button']}`}
          onClick={closeButtonHandle}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
