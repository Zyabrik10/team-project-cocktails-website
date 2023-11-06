import { CocktailCard } from "components/CocktailCard/CocktailCard";

export const FavList = ({ favorites, handleDelete }) => {


    return (
        <ul>
            {favorites.map(fav =>
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