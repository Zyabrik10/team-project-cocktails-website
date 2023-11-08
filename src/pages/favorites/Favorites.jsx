import { toast } from 'react-hot-toast';
import { useRemoveFavoriteMutation } from 'redux/api/favoritesAPI';
import { SecFavorites } from './sec-favorites/SecFavorites';

export default function Favorites() {
  const [removeFavorite, { isError }] = useRemoveFavoriteMutation();

  const handleDelete = async drinkId => {
    if (isError) {
      toast.error('something went wrong');
    }
    await removeFavorite({
      id: drinkId,
    });

    toast.success('Deleted from favorite successful');
  };

  return (
    <>
      <SecFavorites handleDelete={handleDelete} />
    </>
  );
}
