import axios from "axios";

const SongRepository = {

    getAllSongReviews : () =>{
        return axios.get("/songs/reviews");
    },

    getAllSongs : () => {
        return axios.get("/songs/all");
    }

};

export default SongRepository;
