import axios from "axios";

const PodcastRepository = {

    getAllPodcasts : () =>{
        return axios.get("/podcasts/all");
    }

};

export default PodcastRepository;