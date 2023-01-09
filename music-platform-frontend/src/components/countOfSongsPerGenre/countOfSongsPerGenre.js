import React, {Component, useEffect, useState} from "react";
import SongRepository from "../../repository/songRepository";
import Container from "react-bootstrap/Container";
import {Col, Row, Table} from "react-bootstrap";

const CountOfSongsPerGenre = () => {

    const [genres, setGenre] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        SongRepository.getSongsByGenre()
            .then((response) => {
                    setGenre(response.data)
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
                                <th>Genre</th>
                                <th>Count of songs</th>
                            </tr>
                            </thead>
                            <tbody>
                            {genres.map(genre => {
                                return (
                                    <tr style={{verticalAlign: "middle"}}>
                                        <td>{genre.name}</td>
                                        <td>{genre.count}</td>
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

export default CountOfSongsPerGenre;