import css from '../../Header.module.css';


export const BurgerMenuSvg = () => {
    return (
        <svg className={css.burgerSvg} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g id="align-justify">
                <path id="Vector" d="M28 13.3335H4"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path id="Vector_2" d="M28 8H4"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path id="Vector_3" d="M28 18.6665H4"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path id="Vector_4" d="M28 24H4"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
        </svg>
    );
  }
  export default BurgerMenuSvg;