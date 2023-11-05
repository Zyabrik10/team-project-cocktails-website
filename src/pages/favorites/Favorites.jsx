import { useEffect } from "react";
import { useGetFavoritesQuery, useAddFavoriteMutation, useRemoveFavoriteMutation } from "redux/api/favoritesAPI";
import { SecFavorites } from "./sec-favorites/SecFavorites"

export default function Favorites() {
    const { data: favorites,
        // isLoading, isError, error
    } = useGetFavoritesQuery();
    const { mutate: addFavorite } = useAddFavoriteMutation();
    const { mutate: removeFavorite } = useRemoveFavoriteMutation();

    useEffect(() => {
        if (!favorites) {
            return;
        }
        console.log(favorites)
    }, [favorites]);

    const handleAddFavorite = (drinkId) => {
        addFavorite(drinkId)
    };

    const handleRemoveFavorite = (drinkId) => {
        removeFavorite(drinkId)
    };

    return (
        <>
            <SecFavorites
                favorites={favorites}
                onAddFavorite={handleAddFavorite}
                onRemoveFavorite={handleRemoveFavorite}
            />
        </>
    )
}