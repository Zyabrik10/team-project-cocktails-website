import { FavList } from "components/FavList/FavList";
import { Title } from "components/Title/Title";
import { FavNotFound } from "components/FavList/FavNotFound";

import globalCss from '../../../css/global.module.css'

export const SecFavorites = ({ favorites, handleDelete }) => {
    console.log(favorites)
    console.log(handleDelete)
    return (
        <div className={`${globalCss.container}`}>
            <Title>Favorites</Title>
            {favorites ? <FavList
                favorites={favorites}
                handleDelete={handleDelete}
            /> : <FavNotFound />}
        </div>
    );
};