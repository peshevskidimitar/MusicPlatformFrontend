import logo from './logo.svg';
import './App.css';
import SongReviews from "./components/songReviews/songReviews";
import {Route, Routes} from "react-router-dom";
import Song from "./components/songs/songs";
import Podcast from "./components/podcast/podcast";
import UserPlaylist from "./components/userPlaylist/userPlaylist";
import AverageCountOfSongsPerUserPlaylist
    from "./components/averageCountOfSongsPerUserPlaylist/averageCountOfSongsPerUserPlaylist";
import CountOfSongsPerGenre from "./components/countOfSongsPerGenre/countOfSongsPerGenre";
import CountOfSongsPerPlaylist from "./components/countOfSongsPerPlaylist/countOfSongsPerPlaylist";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/songs/reviews" element={<SongReviews/>}/>
                <Route path="/songs/all" element={<Song/>}/>
                <Route path="/songs/byGenre" element={<CountOfSongsPerGenre/>}/>
                <Route path="/podcasts/all" element={<Podcast/>}/>
                <Route path="/playlists/all" element={<UserPlaylist/>}/>
                <Route path="/playlists/stats" element={<AverageCountOfSongsPerUserPlaylist/>}/>
                <Route path="/playlists/getCountSongs" element={<CountOfSongsPerPlaylist/>}/>

            </Routes>
        </div>
    );
}

export default App;
