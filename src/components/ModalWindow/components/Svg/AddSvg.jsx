import css from '../../components/UserProfile/UserProfile.module.css';


export const AddSvg = () => {
    return (
        <svg  className={css.addSvg}  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="14" fill="#546081"/>
            <path d="M14.2188 9.625V18.8125" stroke="#F3F3F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.625 14.2188H18.8125" stroke="#F3F3F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
  }
  export default AddSvg;