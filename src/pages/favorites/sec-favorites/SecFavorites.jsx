import { FavList } from "components/FavList/FavList";
import { Title } from "components/Title/Title";
import { FavNotFound } from "components/FavList/FavNotFound";

import globalCss from '../../../css/global.module.css'

export const SecFavorites = ({ favorites, handleRemoveFavorite }) => {
    console.log(favorites)

    return (
        <div className={`${globalCss.container}`}>
            <Title>Favorites</Title>
            {favorites ? <FavList
                favorites={favorites}
                handleRemoveFavorite={handleRemoveFavorite}
            /> : <FavNotFound />}
        </div>
    );
};