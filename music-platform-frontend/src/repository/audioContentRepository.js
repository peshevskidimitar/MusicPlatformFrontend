import axios from "axios";

const AudioContentRepository = {

    getAudioContentStats : () =>{
        return axios.get("/audio-contents/reviews-stats");
    },

    getAll : () => {
        return axios.get("/audio-contents/all");
    }

};

export default AudioContentRepository;