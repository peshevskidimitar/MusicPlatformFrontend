import axios from "axios";

const SongRepository = {

    getAllSongReviews : () =>{
        return axios.get("/songs/reviews");
    },

    getAllSongs : () => {
        return axios.get("/songs/all");
    },

    getSongsByGenre: () => {
        return axios.get("/songs/byGenre");
    }

};

export default SongRepository;
