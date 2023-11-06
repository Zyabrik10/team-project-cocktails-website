import css from '../../components/UserProfile/UserProfile.module.css';

export const ResetSvg = () => {
  return (
    <svg
      className={css.addSvg}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <title>refreshAvatar</title>
      <path
        fill="currentColor"
        d="M16 8c0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.418 3.582-8 8-8s8 3.582 8 8z"
      ></path>
      <path
        className={css.refresh}
        fill="currentColor"
        d="M11.556 6.536c-0.899-1.87-3.25-2.55-5.082-1.595-0.144 0.080-0.207 0.254-0.127 0.414 0.080 0.144 0.254 0.207 0.414 0.127 1.53-0.796 3.483-0.228 4.238 1.322 1.002 2.057-0.291 3.626-1.339 4.206-1.426 0.792-3.235 0.267-4.099-1.083l1.061 0.222c0.159 0.032 0.334-0.064 0.366-0.239 0.032-0.159-0.064-0.334-0.239-0.366l-1.881-0.383c-0.316-0.031-0.383 0.254-0.366 0.351l0.239 1.896c0.015 0.159 0.144 0.271 0.303 0.271 0.196 0 0.319-0.191 0.303-0.366l-0.092-0.774c0.879 1.084 2.609 2.010 4.708 1.045 0.89-0.46 2.933-2.262 1.591-5.049z"
      ></path>
    </svg>
  );
};
export default ResetSvg;
