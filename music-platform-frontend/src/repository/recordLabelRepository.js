import axios from "axios";

const RecordLabelRepository = {

    getAll : () => {
        return axios.get("/record-labels/all");
    }

};

export default RecordLabelRepository;