import axios from "axios";

const UserRepository = {

    getAllUsers : () =>{
        return axios.get("/users/all");
    }

};

export default UserRepository;