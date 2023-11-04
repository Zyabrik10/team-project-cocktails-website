import css from './ModalWindow.module.css';

export const ModalWindow = ({ children, isShown, setClose, closeOnKeyDown }) => {
  const closeOnClick = ({ target }) => {
    if (
      target.classList.value !== '' &&
      target.classList[0] === css['modal-wrapper']
    )
      setClose(false);
    document.removeEventListener('keydown', closeOnKeyDown);
  };

  return (
    <div
      className={`${css['modal-wrapper']} ${isShown ? css['active'] : ''}`}
      onClick={closeOnClick}
    >
      {children}
    </div>
  );
};
