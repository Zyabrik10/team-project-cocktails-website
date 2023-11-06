import css from '../../components/UserProfile/UserProfile.module.css';

export const AddSvg = () => {
  return (
    <svg
      className={css.addSvg}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <title>add-photo</title>
      <path
        fill="currentColor"
        d="M16 8c0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.418 3.582-8 8-8s8 3.582 8 8z"
      ></path>
      <path
        className={css.icon}
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="1"
        d="M8.125 5.5v5.25"
      ></path>
      <path
        className={css.icon}
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="1"
        d="M5.5 8.125h5.25"
      ></path>
    </svg>
  );
};
export default AddSvg;
