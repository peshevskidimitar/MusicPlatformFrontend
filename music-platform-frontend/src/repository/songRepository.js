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
    },

    getMostPopular: () => {
        return axios.get("/songs/most-popular");
    },

    getTotalViews: () => {
        return axios.get("/songs/total-views");
    },

    addNewSong : (formData) =>{
        // console.log("this is form data:" + formData.get("song"));
        return axios.post("/songs/add",formData,{
            headers: {
                'Content-Type':"multipart/form-data",
                'responseType': 'blob'
            }});
    },

    insertSongIntoPlaylist : (formData) =>{
        return axios.post(`/songs/add-to-playlist`,null,{params: {
                playlistId: formData.playlistId,
                audioContentId: formData.audioContentId,
            }})
    }

};

export default SongRepository;
