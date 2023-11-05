import { CocktailCard } from "components/CocktailCard/CocktailCard"

export const FavList = ({ favoritesArr }) => {
    console.log(favoritesArr)
    return (
        <ul>
            {favoritesArr?.map(fav =>
                <li key={fav._id}>
            <CocktailCard/>
               </li>
                )}
            
        </ul>
    )
}