import { useEffect, useState } from "react";
import {
    useGetFavoritesQuery,
    // useAddFavoriteMutation,
    useRemoveFavoriteMutation
} from "redux/api/favoritesAPI";
import { SecFavorites } from "./sec-favorites/SecFavorites"

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);
    const { data: fetchedFavorites,
        // isLoading, isError, error
    } = useGetFavoritesQuery();
    // const { mutate: addFavorite } = useAddFavoriteMutation();
    const  [removeFavorite] = useRemoveFavoriteMutation();


    useEffect(() => {
        if (!fetchedFavorites?.result.length) {
            return;
        }
        setFavorites(fetchedFavorites.result);
    }, [fetchedFavorites]);

    // const handleAddFavorite = (drinkId) => {
    //     addFavorite(drinkId);
    // };
    //ця функція і мутація для додавання в вибрані

    const handleDelete = async (drinkId) => {
        await removeFavorite({
            id: drinkId
        });

        const updateFavorites = favorites.filter(({ _id }) => _id !== drinkId);

        setFavorites(updateFavorites)
    };


    return (
        <>
            <SecFavorites
                favorites={favorites}
                handleDelete={handleDelete}
            />
        </>
    )
}