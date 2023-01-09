import React, {Component, useEffect, useState} from "react";
import playlistRepository from "../../repository/playlistRepository";
import UserRepository from "../../repository/userRepository";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import Container from "react-bootstrap/Container";
import {Col, Row, Table} from "react-bootstrap";

const CountOfSongsPerPlaylist = () => {

    const [songs, setSongs] = useState([]);

    const [selectedUser, setSelectedUser] = useState({
        title: ""
    });

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = (username) => {

        UserRepository.getAllUsers()
            .then((response)=>{
                setUsers(response.data)
            })

        playlistRepository.getCountOfSongs(username)
            .then((response) => {
                    setSongs(response.data)
                }
            );
    }

    const handleChangeUser = (e) => {
        setSelectedUser({
            ...selectedUser,
            [e.target.name]: e.target.value,
        });

        fetchData(e.target.value);
    };


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <FormControl style={{ width: 60 + "%" }} margin={"normal"}>
                            <InputLabel id="demo-simple-select-label">
                                User
                            </InputLabel>

                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="User"
                                onChange={handleChangeUser}
                                name={"username"}
                                value={selectedUser.username}
                            >
                                <MenuItem
                                    style={{ maxWidth: "initial" }}
                                    key={"All"}
                                    value={null}
                                >
                                    All
                                </MenuItem>
                                {users.map((element) => (
                                    <MenuItem
                                        style={{ maxWidth: "initial" }}
                                        key={element.username}
                                        value={element.username}
                                    >
                                        {element.username}
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
                                <th>Username</th>
                                <th>Count of songs</th>
                            </tr>
                            </thead>
                            <tbody>
                            {songs.map(song => {
                                return (
                                    <tr>
                                        <td>{song.title}</td>
                                        <td>{song.username}</td>
                                        <td>{song.countOfSongs}</td>
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

export default CountOfSongsPerPlaylist;