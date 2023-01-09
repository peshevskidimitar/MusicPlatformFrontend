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
import InsertSongIntoPlaylist from "./components/insertSongIntoPlaylist/insertSongIntoPlaylist";
import {Col, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Home from "./components/home/home";

function App() {
    return (
        <>
        <Navbar  bg="success" variant="dark" expand="lg"  >
            <Container>
                <Navbar.Brand href="/"><img src={require("./logoNoText.png")} width={50} height={50}/> Streamy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">

                        <NavDropdown title="Songs" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/songs/all">All</NavDropdown.Item>
                            <NavDropdown.Item href="/songs/byGenre">
                                Songs by genre
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/songs/mostPopular">Most popular songs by year</NavDropdown.Item>
                            {/*<NavDropdown.Divider />*/}
                            <NavDropdown.Item href="/songs/reviews">
                                Song reviews
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/podcasts/all">Podcasts</Nav.Link>
                        <Nav.Link href="/songs/totalViews">Artists statistics</Nav.Link>
                        <Nav.Link href="/audioContent/reviewStats">Monthly reviews</Nav.Link>

                        <NavDropdown title="Playlists" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/playlists/all">All</NavDropdown.Item>
                            <NavDropdown.Item href="/playlists/getCountSongs">Playlist count of songs</NavDropdown.Item>
                            <NavDropdown.Item href="/playlists/stats">
                                Average songs per playlist
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="/songs/add">Add song</Nav.Link>
                        <Nav.Link href="/playlists/add">Add playlist</Nav.Link>
                        <Nav.Link href="/reviews/add">Add review</Nav.Link>
                        <Nav.Link href="/songs/insertSongIntoPlaylist">Add song to playlist</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <div className="App mt-3">
            <Routes>
                <Route path="/" element={<Home/>}/>
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
                <Route path="/songs/insertSongIntoPlaylist" element={<InsertSongIntoPlaylist/>}/>

            </Routes>
        </div>
        </>

    );
}

export default App;
