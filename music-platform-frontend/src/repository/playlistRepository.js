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
    },

    addPlaylist: (formDataPlaylist) => {
        return axios.post(`/playlists/add`,null,{params: {
                title: formDataPlaylist.title,
                playlistTypeId: formDataPlaylist.playlistTypeId,
                userId: formDataPlaylist.userId
            }})
    }
};

export default PlaylistRepository;