import axios from "axios";

const PlaylistRepository = {

    getAllPlaylists : () =>{
        return axios.get("/playlists/all");
    },

    getAllUserStatsForPlaylists : () => {
        return axios.get("/playlists/stats");
    },

    getCountOfSongs: () => {
        return axios.get("/playlists/getCountSongs");
    }

};

export default PlaylistRepository;