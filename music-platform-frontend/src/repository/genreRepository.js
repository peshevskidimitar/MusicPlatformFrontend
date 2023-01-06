import axios from "axios";

const GenreRepository = {

    getAll : () => {
        return axios.get("/genres/all");
    }

};

export default GenreRepository;