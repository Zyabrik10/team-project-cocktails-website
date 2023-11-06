import { useEffect } from "react";
import {
    useGetFavoritesQuery,
    // useAddFavoriteMutation,
    useRemoveFavoriteMutation
} from "redux/api/favoritesAPI";
import { SecFavorites } from "./sec-favorites/SecFavorites"

export default function Favorites() {
    const { data: favorites,
        // isLoading, isError, error
    } = useGetFavoritesQuery();
    // const { mutate: addFavorite } = useAddFavoriteMutation();
    const { mutate: removeFavorite } = useRemoveFavoriteMutation();


    useEffect(() => {
        if (!favorites) {
            return;
        }
        console.log(favorites)
    }, [favorites]);

    // const handleAddFavorite = (drinkId) => {
    //     addFavorite(drinkId);
    // };
    //ця функція і мутація для додавання в вибрані

    const handleDelete = (drinkId) => {
        removeFavorite(drinkId);
    };

    // console.log(handleDelete)

    return (
        <>
            <SecFavorites
                favorites={favorites}
                handleDelete={handleDelete}
            />
        </>
    )
}