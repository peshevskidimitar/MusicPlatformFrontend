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
import MonthlyReviewsAndAverageGradePerAudioContent
    from "./components/monthlyReviewsAndAverageGradePerAudioContent/monthlyReviewsAndAverageGradePerAudioContent";
import MostPopularSongsPerYear from "./components/mostPopularSongsPerYear/mostPopularSongsPerYear";
import TotalViewsOfArtistSongs from "./components/totalViewsOfArtistSongs/totalViewsOfArtistSongs";
import AddNewPlaylist from "./components/addNewPlaylist/addNewPlaylist";
import AddNewReview from "./components/addNewReview/addNewReview";
import AddNewSong from "./components/addNewSong/addNewSong";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/songs/reviews" element={<SongReviews/>}/>
                <Route path="/songs/all" element={<Song/>}/>
                <Route path="/songs/byGenre" element={<CountOfSongsPerGenre/>}/>
                <Route path="/songs/mostPopular" element={<MostPopularSongsPerYear/>}/>
                <Route path="/songs/totalViews" element={<TotalViewsOfArtistSongs/>}/>
                <Route path="/podcasts/all" element={<Podcast/>}/>
                <Route path="/playlists/all" element={<UserPlaylist/>}/>
                <Route path="/playlists/stats" element={<AverageCountOfSongsPerUserPlaylist/>}/>
                <Route path="/playlists/getCountSongs" element={<CountOfSongsPerPlaylist/>}/>
                <Route path="/audioContent/reviewStats" element={<MonthlyReviewsAndAverageGradePerAudioContent/>}/>

                <Route path="/playlists/add" element={<AddNewPlaylist/>}/>
                <Route path="/reviews/add" element={<AddNewReview/>}/>
                <Route path="/songs/add" element={<AddNewSong/>}/>

            </Routes>
        </div>
    );
}

export default App;
