import React, {Component, useEffect, useState} from "react";
import AudioContentRepository from "../../repository/audioContentRepository";

const MonthlyReviewsAndAverageGradePerAudioContent = () => {

    const [audioContents, setAudioContents] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        AudioContentRepository.getAudioContentStats()
            .then((response) => {
                    setAudioContents(response.data)
                }
            );
    }


    return (
        <>
            {audioContents.map(ac => {
                return (
                    <div key={ac.id}>
                        <h2>Content title: {ac.title}</h2>
                        <h2>Month: {ac.month}</h2>
                        <h2>Total reviews: {ac.totalReviews}</h2>
                        <h2>Average grade: {ac.averageGrade}</h2>

                        <hr />
                    </div>
                );
            })}
        </>
    );
}

export default MonthlyReviewsAndAverageGradePerAudioContent;