import axios from "axios";

const ArtistRepository = {

    getAll : () => {
        return axios.get("/artists/all");
    }

};

export default ArtistRepository;