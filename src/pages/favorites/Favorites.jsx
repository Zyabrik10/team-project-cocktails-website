import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import {
    useGetFavoritesQuery,
    useRemoveFavoriteMutation
} from "redux/api/favoritesAPI";
import { SecFavorites } from "./sec-favorites/SecFavorites"

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);
    const { data: fetchedFavorites,
        // isLoading,
        isError
        // error
    } = useGetFavoritesQuery();
    const [removeFavorite] = useRemoveFavoriteMutation();
    

    useEffect(() => {
        if (!fetchedFavorites?.result.length) {
            return;
        }
        setFavorites(fetchedFavorites.result);
    }, [fetchedFavorites]);

    const handleDelete = async (drinkId) => {
        if (isError) {
            toast.error('something went wrong')
        }
        await removeFavorite({
            id: drinkId
        });

        const updateFavorites = favorites.filter(({ _id }) => _id !== drinkId);

        setFavorites(updateFavorites);

        toast.success('deletion successful')
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