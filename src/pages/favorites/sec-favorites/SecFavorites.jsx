import { FavList } from "components/FavList/FavList";
import { Title } from "components/Title/Title";
import { FavNotFound } from "components/FavList/FavNotFound";
import css from './SecFavorites.module.css'

import globalCss from '../../../css/global.module.css'

export const SecFavorites = ({ favorites, handleDelete }) => {

    return (
        <div className={`${globalCss.container}`}>
            <section className={css.section}>
            <Title>Favorites</Title>
            {favorites.length ? <FavList
                favorites={favorites}
                handleDelete={handleDelete}
            /> : <FavNotFound />}
            </section>
        </div>
    );
};