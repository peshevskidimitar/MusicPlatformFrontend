import axios from "axios";

const ReviewRepository = {

    addNewReview : (formDataReview) =>{
        return axios.post("/reviews/add",null,{params: {
                content: formDataReview.content,
                audioContentId: formDataReview.audioContentId,
                userId: formDataReview.userId,
                grade: formDataReview.grade
            }});
    }

};

export default ReviewRepository;