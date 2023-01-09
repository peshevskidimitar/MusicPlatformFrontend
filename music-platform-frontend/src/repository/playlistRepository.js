import axios from "axios";

const PlaylistRepository = {

    getAllPlaylists : (username) =>{
        return axios.get("/playlists/all",{params:{
            userUsername:username
            }});
    },

    getAllUserStatsForPlaylists : () => {
        return axios.get("/playlists/stats");
    },

    getCountOfSongs: (username) => {
        return axios.get("/playlists/getCountSongs",{params:{
                username:username
            }});
    },

    addPlaylist: (formDataPlaylist) => {
        return axios.post(`/playlists/add`,null,{params: {
                title: formDataPlaylist.title,
                playlistTypeId: formDataPlaylist.playlistTypeId,
                userId: formDataPlaylist.userId
            }})
    },

    getAll : () =>{
        return axios.get("/playlists");
    }

};

export default PlaylistRepository;