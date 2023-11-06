import { useCallback, useEffect, useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { updatehUser } from 'redux/auth/operations';

import CloseSvg from '../Svg/CloseSvg';
import AddSvg from '../Svg/AddSvg';
import EdditSvg from '../Svg/EdditSvg';
import ResetSvg from '../Svg/ResetSvg';

import css from './UserProfile.module.css';
import inputStyles from 'components/Form/FormInput/FormInput.module.css';
import globalCss from 'css/global.module.css';
import toast from 'react-hot-toast';
import Loader from 'components/Loader';

const fileTypes = ['JPG', 'PNG', 'GIF'];

const borderVariant = { succes: 'succes', invalid: 'invalid' };

export const UserProfile = ({ setClose, closeOnKeyDown, isShown }) => {
  const {
    user: { avatarURL, username },
  } = useAuth();
  const [selectedImage, setSelectedImage] = useState(null);
  const [userName, setUserName] = useState(username);
  const [variant, setVariant] = useState('succes');
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const cs = useCallback(closeOnKeyDown, [closeOnKeyDown]);

  useEffect(() => {
    if (isShown) {
      document.addEventListener('keydown', cs);
      setUserName(username);
      setSelectedImage(null);
      setVariant('succes');
      setDisabled(false);
    }
  }, [isShown, cs, username]);

  const closeButtonHandle = () => {
    setClose(false);
    document.removeEventListener('keydown', closeOnKeyDown);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (userName !== '') {
      const refreshDate = new FormData();
      refreshDate.append('username', userName.trim());
      refreshDate.append('avatar', selectedImage);

      setIsLoading(true);
      setDisabled(true);

      dispatch(updatehUser(refreshDate))
        .then(res => {
          toast.success('User updated');
          setIsLoading(false);
          setDisabled(false);
          setClose(false);
        })
        .catch(e => {
          setIsLoading(false);
          setDisabled(false);
          throw toast.error('Something wrong. Try again');
        });

      return;
    }

    setDisabled(true);
    setVariant(borderVariant.invalid);
    toast.error('Username field should not be empty');
  };

  const handleImageChange = file => {
    setSelectedImage(file);
  };

  const handleChange = e => {
    setDisabled(false);
    setUserName(e.target.value);
  };

  const handleOnBlur = e => {
    console.log(e.target.value);
    if (e.target.value === '') {
      setVariant(borderVariant.invalid);
      setDisabled(true);
      return;
    }

    setDisabled(false);
    setVariant(borderVariant.succes);
  };

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

        <div className={css.avatarWrap}>
          <div className={css.imgBox}>
            {selectedImage ? (
              <img
                className={css['img-preview']}
                src={URL.createObjectURL(selectedImage)}
                alt="Selected Preview"
              />
            ) : (
              <img className={css.profileImg} src={avatarURL} alt="Avatar" />
            )}
          </div>

          <FileUploader
            id="image"
            name="image"
            types={fileTypes}
            handleChange={handleImageChange}
            hoverTitle={'Drop image here'}
            classes={`${css.addBtn} ${globalCss['global-button']}`}
          >
            <div className={css['drop-file-block']}>
              {selectedImage ? (
                <>
                  <ResetSvg />
                </>
              ) : (
                <AddSvg />
              )}
            </div>
          </FileUploader>
        </div>

        <form onSubmit={handleSubmit} className={css.inputBox}>
          <label className={inputStyles['form-input-box']}>
            <span className={css.editImg}>
              <EdditSvg />
            </span>

            <input
              className={`${inputStyles['form-input']} ${css[variant]}`}
              name="userName"
              type="text"
              value={userName}
              onChange={handleChange}
              onBlur={handleOnBlur}
              placeholder="Enter new Name"
            />
          </label>

          <button
            type="submit"
            disabled={disabled}
            className={`${css.submitBtn} ${globalCss['custom-button']} ${globalCss['global-button']}`}
          >
            {!isLoading ? 'Save changes' : <Loader size={7} />}
          </button>
        </form>
      </div>
    </div>
  );
};
