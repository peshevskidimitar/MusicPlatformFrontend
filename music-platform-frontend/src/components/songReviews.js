import React, {Component, useEffect, useState} from "react";
import SongRepository from "../repository/songRepository";

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
                        <h2>name: {songReview.songTitle}</h2>
                        <h2>country: {songReview.songDatePublished}</h2>
                        <h2>country: {songReview.reviewContent}</h2>
                        <h2>country: {songReview.reviewDateCreated}</h2>
                        <h2>country: {songReview.userUsername}</h2>

                        <hr />
                    </div>
                );
            })}
        </>
    );
}

export default SongReviews;