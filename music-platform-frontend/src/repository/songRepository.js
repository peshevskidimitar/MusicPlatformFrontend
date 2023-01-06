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

    addNewSong : (formData,formDataSong) =>{
        return axios.post("/songs/add",formData,{params: {
                title: formDataSong.title,
                datePublished: formDataSong.datePublished,
                genreId: formDataSong.genreId,
                lyrics: formDataSong.lyrics,
                albumId: formDataSong.albumId,
                recordLabelId: formDataSong.recordLabelId,
                artistId: formDataSong.artistId
            },
            headers: {
                'Content-Type':"multi-part/form-data"
            }});
    }

};

export default SongRepository;
