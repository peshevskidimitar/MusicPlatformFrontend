import React, {Component, useEffect, useState} from "react";
import SongRepository from "../../repository/songRepository";
import Container from "react-bootstrap/Container";
import {Col, Row, Table} from "react-bootstrap";

const TotalViewsOfArtistSongs = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        SongRepository.getTotalViews()
            .then((response) => {
                    setSongs(response.data)
                }
            );
    }


    return (
        <>
            <Container>
                <Row className={"justify-content-center"}>
                    <Col xs={"6"}>
                        <Table striped border hover size={"sm"}>
                            <thead>
                            <tr>
                                <th>Artist</th>
                                <th>Total views</th>
                            </tr>
                            </thead>
                            <tbody>
                            {songs.map(song => {
                                return (
                                    <tr style={{verticalAlign: "middle"}}>
                                        <td>{song.fullName}</td>
                                        <td>{song.totalViews}</td>
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

export default TotalViewsOfArtistSongs;