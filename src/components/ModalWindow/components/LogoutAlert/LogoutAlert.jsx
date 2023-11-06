import css from './LogoutAlert.module.css';
import globalCss from '../../../../css/global.module.css';

import CloseSvg from '../Svg/CloseSvg';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signout } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { useCallback, useEffect } from 'react';
import { useRef } from 'react';

export const LogoutAlert = ({ isShown, setClose, closeOnKeyDown }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector(selectUser);

  const ref = useRef();

  const buttonHandle = async () => {
    await dispatch(signout(token));
    navigate('/welcome');
  };

  const closeButtonHandle = () => {
    setClose(false);
    document.removeEventListener('keydown', closeOnKeyDown);
  };

  const cs = useCallback(closeOnKeyDown, [closeOnKeyDown]);

  useEffect(() => {
    if (isShown) document.addEventListener('keydown', cs);
  }, [isShown, cs]);

  return (
    <div ref={ref} className={css.profileAlert}>
      <button
        className={`${css.closeBtn} ${globalCss['global-button']}`}
        onClick={closeButtonHandle}
      >
        <CloseSvg />
      </button>
      <p className={css.alertTitle}>Are you sure you want to log out?</p>
      <div className={css.btnBox}>
        <button
          style={{ background: '#f3f3f3' }}
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
