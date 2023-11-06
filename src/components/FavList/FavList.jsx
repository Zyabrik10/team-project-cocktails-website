import { CocktailCard } from "components/CocktailCard/CocktailCard";

export const FavList = ({ favorites, handleDelete }) => {
    console.log(favorites)
    const favArray = favorites.result;
    console.log(handleDelete)
    return (
        <ul>
            {favArray.map(fav =>
                <li key={fav._id}>
                    <CocktailCard
                        obj={fav}  
                        handleDelete={handleDelete}
                    />
               </li>
                )}
        </ul>
    )
}