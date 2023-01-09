import React, {Component, useEffect, useState} from "react";
import SongRepository from "../../repository/songRepository";
import {Col, Container, Row, Table} from "react-bootstrap";

const Song = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        SongRepository.getAllSongs()
            .then((response) => {
                    setSongs(response.data)
                }
            );
    }


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Table striped border hover size={"sm"}>
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Date published</th>
                                <th>Views</th>
                                <th>Genre</th>
                                <th>Artist's name</th>
                                <th>Artist's country</th>
                                <th>Album's title</th>
                                <th>Record label</th>
                                <th>Music professionals</th>
                            </tr>
                            </thead>
                            <tbody>
                            {songs.map(songReview => {
                                return (
                                    <tr style={{verticalAlign: "middle"}}>
                                        <td>{songReview.songTitle}</td>
                                        <td style={{width: "10%"}}>{songReview.songDatePublished}</td>
                                        <td>{songReview.songViews}</td>
                                        <td>{songReview.genreName}</td>
                                        <td>{songReview.artistFullName}</td>
                                        <td>{songReview.artistCountry}</td>
                                        <td>{songReview.albumTitle}</td>
                                        <td>{songReview.recordLabelName}</td>
                                        <td>
                                            {songReview.musicProfessionals.map((element) => (
                                                <div>
                                                    {element.musicProfessionalName} {element.musicProfessionalSurname} as {element.musicProfessionalProfession}
                                                </div>
                                            ))}
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Song;