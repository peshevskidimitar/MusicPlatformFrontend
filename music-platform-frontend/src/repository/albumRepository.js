import axios from "axios";

const AlbumRepository = {

    getAll : () => {
        return axios.get("/albums/all");
    }

};

export default AlbumRepository;