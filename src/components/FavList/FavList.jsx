import { CocktailCard } from "components/CocktailCard/CocktailCard";

export const FavList = ({ favorites, handleRemoveFavorite }) => {
    console.log(favorites)
    const favArray = favorites.result;

    return (
        <ul>
            {favArray.map(fav =>
                <li key={fav._id}>
                    <CocktailCard
                        obj={fav}  
                        handleRemoveFavorite={handleRemoveFavorite}
                    />
               </li>
                )}
        </ul>
    )
}