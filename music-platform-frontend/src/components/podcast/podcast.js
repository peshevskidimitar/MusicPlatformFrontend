import React, {Component, useEffect, useState} from "react";
import PodcastRepository from "../../repository/podcastRepository";

const Podcast = () => {

    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        PodcastRepository.getAllPodcasts()
            .then((response) => {
                    setPodcasts(response.data)
                }
            );
    }


    return (
        <>
            {podcasts.map(podcast => {
                return (
                    <div key={podcast.id}>
                        <h2>Title: {podcast.podcastTitle}</h2>
                        <h2>Date published: {podcast.podcastDatePublished}</h2>
                        <h2>Description: {podcast.podcastDescription}</h2>
                        <h2>Genre: {podcast.genreName}</h2>
                        <h2>Name: {podcast.musicProfessionalName}</h2>
                        <h2>Surname: {podcast.musicProfessionalSurname}</h2>
                        <h2>Profession: {podcast.musicProfessionalProfession}</h2>

                        <hr />
                    </div>
                );
            })}
        </>
    );
}

export default Podcast;