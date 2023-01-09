import React, {Component, useEffect, useState} from "react";
import SongRepository from "../../repository/songRepository";
import {Col, Container, FloatingLabel, Form, Row, Table} from "react-bootstrap";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const SongReviews = () => {

    const [allSongReviews, setAllSongReviews] = useState([]);
    const [songs, setSongs] = useState([]);

    const [selectedSong, setSelectedSong] = useState({
        songTitle: ""
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = (song) => {
        SongRepository.getAll().then((response) => {
                setSongs(response.data)
            }
        );

        SongRepository.getAllSongReviews(song)
            .then((response) => {
                    setAllSongReviews(response.data)
                }
            );
    }

    const handleChangeSong = (e) => {
        setSelectedSong({
            ...selectedSong,
            [e.target.name]: e.target.value,
        });

        fetchData(e.target.value);
    };


    return (
        <>
            <Container>
                <Row className={"justify-content-center"}>
                    <Col xs={"6"}>
                        <FormControl style={{width: 60 + "%"}} margin={"normal"}>
                            <InputLabel id="demo-simple-select-label">
                                Song
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Song"
                                onChange={handleChangeSong}
                                name={"songTitle"}
                                value={selectedSong.songTitle}
                            >
                                <MenuItem
                                    style={{maxWidth: "initial"}}
                                    key={"All"}
                                    value={null}
                                >
                                    All
                                </MenuItem>
                                {songs.map((element) => (
                                    <MenuItem
                                        style={{maxWidth: "initial"}}
                                        key={element.title}
                                        value={element.title}
                                    >
                                        {element.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped border hover size={"sm"}>
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Date published</th>
                                <th>Content</th>
                                <th>Date created</th>
                                <th>User</th>
                                <th>Grade</th>
                            </tr>
                            </thead>
                            <tbody>
                            {allSongReviews.map(songReview => {
                                return (

                                    <tr>
                                        <td>{songReview.songTitle}</td>
                                        <td>{songReview.songDatePublished}</td>
                                        <td>{songReview.reviewContent}</td>
                                        <td>{songReview.reviewDateCreated}</td>
                                        <td>{songReview.userUsername}</td>
                                        <td>{songReview.reviewGrade}</td>
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

export default SongReviews;