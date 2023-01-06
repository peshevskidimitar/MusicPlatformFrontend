import axios from "axios";

const PlaylistTypeRepository = {

    getAllPlaylistTypes : () =>{
        return axios.get("/playlist-types/all");
    }

};

export default PlaylistTypeRepository;