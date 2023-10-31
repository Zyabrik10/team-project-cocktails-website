import css from '../../components/LogoutAlert/LogoutAlert.module.css';


export const CloseSvg = () => {
    return (
        <svg className={css.closeSvg} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 8L8 24"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 8L24 24"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
  }
  export default CloseSvg;