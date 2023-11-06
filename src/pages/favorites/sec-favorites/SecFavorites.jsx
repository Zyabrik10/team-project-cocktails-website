import { FavList } from "components/FavList/FavList";
import { Title } from "components/Title/Title";
import { FavNotFound } from "components/FavList/FavNotFound";

import globalCss from '../../../css/global.module.css'

export const SecFavorites = ({ favoritesArr, handleDelete }) => {

    return (
        <div className={`${globalCss.container}`}>
            <Title>Favorites</Title>
            {favoritesArr.length ? <FavList
                favoritesArr={favoritesArr}
                handleDelete={handleDelete}
            /> : <FavNotFound />}
        </div>
    );
};