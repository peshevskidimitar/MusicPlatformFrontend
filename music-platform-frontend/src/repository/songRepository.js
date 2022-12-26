import axios from "axios";

const SongRepository = {

    getAllSongReviews : () =>{
        return axios.get("/songs/reviews");
    }

};

export default SongRepository;
