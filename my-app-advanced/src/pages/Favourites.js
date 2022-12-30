import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage() {
  const favoritesCtx = useContext(FavouritesContext);

  let content;

  if (favoritesCtx.totalFavourites === 0) {
    content = <p>You got no favourites yet</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favourites} />;
  }
  return (
    <section>
      <h1>Favorites meetups</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
