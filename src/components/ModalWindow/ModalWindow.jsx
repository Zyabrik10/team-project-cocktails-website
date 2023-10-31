import css from './ModalWindow.module.css';

export const ModalWindow = ({ children, active, closeOn }) => {
  return (
    <div
      className={`${css['modal-wrapper']} ${active ? css['active'] : ''}`}
      onClick={closeOn}
      >
          {children}
    </div>
  );
};
