import React, {Component, useEffect, useState} from "react";
import PodcastRepository from "../../repository/podcastRepository";
import {Col, Container, Row, Table} from "react-bootstrap";


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
            <Container>
                <Row>
                    <Col>
                        <Table striped border hover responsive size={"sm"}>
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
                                        <tr style={{verticalAlign: "middle"}}>
                                            <td>{podcast.podcastTitle}</td>
                                            <td>{podcast.podcastDatePublished}</td>
                                            <td style={{
                                                width: "40%",
                                                textAlign: "left"
                                            }}>{podcast.podcastDescription}</td>
                                            <td>{podcast.genreName}</td>
                                            <td>
                                                {
                                                    podcast.musicProfessionals.map(musicProfessional => {
                                                        return (
                                                            <div>{musicProfessional.musicProfessionalName} {musicProfessional.musicProfessionalSurname} as {musicProfessional.musicProfessionalProfession}</div>
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
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Podcast;