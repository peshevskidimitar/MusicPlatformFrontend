import React, {Component, useEffect, useState} from "react";
import SongRepository from "../../repository/songRepository";

const SongReviews = () => {

    const [songReviews, setSongReviews] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        SongRepository.getAllSongReviews()
            .then((response) => {
                    setSongReviews(response.data)
                }
            );
    }


    return (
        <>
            {songReviews.map(songReview => {
                return (
                    <div key={songReview.id}>
                        <h2>Title: {songReview.songTitle}</h2>
                        <h2>Date published: {songReview.songDatePublished}</h2>
                        <h2>Content: {songReview.reviewContent}</h2>
                        <h2>Date created: {songReview.reviewDateCreated}</h2>
                        <h2>User: {songReview.userUsername}</h2>
                        <h2>Grade: {songReview.reviewGrade}</h2>

                        <hr />
                    </div>
                );
            })}
        </>
    );
}

export default SongReviews;