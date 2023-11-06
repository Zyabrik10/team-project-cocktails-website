import globalCss from '../../css/global.module.css';
import css from './FavNotFound.module.css';


export const FavNotFound = () => {
    return (
        <div className={`${css["notFoundBox"]} ${globalCss["container"]}`} >
            <img className={css.errorImage}src={require('../../img/home/ice_tea_1x.png')} alt='ErrorImg' />
            <p className={css.errorText}>You haven't added any favorite cocktails yet</p>
        </div>
    )
}