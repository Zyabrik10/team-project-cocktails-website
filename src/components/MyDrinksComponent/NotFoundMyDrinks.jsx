import globalCss from '../../css/global.module.css';
import css from './MyDrinks.module.css';


export const NotFoundMyDrinks = () => {
    return (
        <div className={`${css["notFound"]} ${globalCss["container"]}`} >
            <img className={css.errorImage}src={require('../../img/home/ice_tea_1x.png')} alt='ErrorImage' />
            <p className={css.errorText}>You haven't added any cocktails yet</p>
        </div>
    )
}