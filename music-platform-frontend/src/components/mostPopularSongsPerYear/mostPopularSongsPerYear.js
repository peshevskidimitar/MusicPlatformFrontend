import React, {Component, useEffect, useState} from "react";
import SongRepository from "../../repository/songRepository";
import Container from "react-bootstrap/Container";
import {Col, Row, Table} from "react-bootstrap";

const MostPopularSongsPerYear = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        SongRepository.getMostPopular()
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
                                <th>Year</th>
                                <th>Song</th>
                                <th>Views</th>
                            </tr>
                            </thead>
                            <tbody>
                            {songs.map(song => {
                                return (
                                    <tr style={{verticalAlign: "middle"}}>
                                        <td>{song.year}</td>
                                        <td>{song.title}</td>
                                        <td>{song.maxViews}</td>
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

export default MostPopularSongsPerYear;