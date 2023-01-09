import React, {Component, useEffect, useState} from "react";
import PlaylistRepository from "../../repository/playlistRepository";
import Container from "react-bootstrap/Container";
import {Col, Row, Table} from "react-bootstrap";

const AverageCountOfSongsPerUserPlaylist = () => {

    const [userPlaylistStats, setUserPlaylistStats] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        PlaylistRepository.getAllUserStatsForPlaylists()
            .then((response) => {
                    setUserPlaylistStats(response.data)
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
                                <th>Username</th>
                                <th>Average count of songs per playlist</th>
                            </tr>
                            </thead>
                            <tbody>
                            {userPlaylistStats.map(playlist => {
                                return (
                                    <tr>
                                        <td>{playlist.username}</td>
                                        <td>{playlist.averageCountOfSongs.toFixed(2)}</td>
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

export default AverageCountOfSongsPerUserPlaylist;