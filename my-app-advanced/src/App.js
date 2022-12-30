import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import Layout from "./components/layout/Layout";

function App() {
  //127.0.0.1:3000/

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
