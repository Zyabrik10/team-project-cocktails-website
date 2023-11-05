import { useEffect } from "react";
import { useGetFavoritesQuery } from "redux/api/favoritesAPI";
import { SecFavorites } from "./sec-favorites/SecFavorites"

export default function Favorites() {
    const { data: favorites,
        // isLoading, isError, error
    } = useGetFavoritesQuery();
    useEffect(() => {
         if (!favorites) {
             return;
         }
        console.log(favorites)
     }, [favorites])

    return (
        <>
            <SecFavorites/>
        </>
    )
}