import globalCss from '../../css/global.module.css';
import css from './ErrorComponent.module.css';


export const ErrorComponent = () => {
  return (
        <div className={`${css["notFoundBox"]} ${globalCss["container"]}`}>
            <span className={css.errorText}>4</span>
            <img className={css.errorImage} src={require('../../img/home/ice_tea_1x.png')} alt='ErrorImg'/>      
            <span className={css.errorText}>4</span>
         </div>
  )
}

