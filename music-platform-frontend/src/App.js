import logo from './logo.svg';
import './App.css';
import SongReviews from "./components/songReviews/songReviews";
import {Route, Routes} from "react-router-dom";
import Song from "./components/songs/songs";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/songs/reviews" element={ <SongReviews/> } />
          <Route path="/songs/all" element={ <Song/> } />
          {/*<Route path="contact" element={ <Contact/> } />*/}
        </Routes>
      </div>
  );
}

export default App;
