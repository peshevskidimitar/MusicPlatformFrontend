import React, {Component, useEffect, useState} from "react";
import PodcastRepository from "../../repository/podcastRepository";
import {Table} from "react-bootstrap";


const Podcast = () => {

    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        PodcastRepository.getAllPodcasts()
            .then((response) => {
                    setPodcasts(response.data)
                console.log(response.data)
                }
            );
    }


    return (
        <>
            <Table striped border={true} hover>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Date published</th>
                    <th>Description</th>
                    <th>Genre</th>
                    <th>Music professionals</th>
                </tr>
                </thead>
                <tbody>
                {
                    podcasts.map(podcast => {
                        return (
                            <tr>
                                <td>{podcast.podcastTitle}</td>
                                <td>{podcast.datePublished}</td>
                                <td>{podcast.podcastDescription}</td>
                                <td>{podcast.genreName}</td>
                                <td>
                                    {
                                        podcast.musicProfessionals.map(musicProfessional => {
                                            return (
                                                <li>{musicProfessional.musicProfessionalName} {musicProfessional.musicProfessionalSurname} as {musicProfessional.musicProfessionalProfession}</li>
                                            );
                                        })
                                    }
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </Table>
        </>
    );
}

export default Podcast;