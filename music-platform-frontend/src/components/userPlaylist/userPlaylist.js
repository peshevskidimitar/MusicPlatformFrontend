import React, {Component, useEffect, useState} from "react";
import PlaylistRepository from "../../repository/playlistRepository";
import UserRepository from "../../repository/userRepository";
import Container from "react-bootstrap/Container";
import {Col, Row, Table} from "react-bootstrap";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const UserPlaylist = () => {

    const [userPlaylists, setUserPlaylists] = useState([]);

    const [selectedUser, setSelectedUser] = useState({
        title: ""
    });

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = (username) => {
        UserRepository.getAllUsers()
            .then((response) => {
                setUsers(response.data)
            })

        PlaylistRepository.getAllPlaylists(username)
            .then((response) => {
                    setUserPlaylists(response.data)
                    // console.log(response.data)
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
                        <FormControl style={{width: 60 + "%"}} margin={"normal"}>
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
                                    style={{maxWidth: "initial"}}
                                    key={"All"}
                                    value={null}
                                >
                                    All
                                </MenuItem>
                                {users.map((element) => (
                                    <MenuItem
                                        style={{maxWidth: "initial"}}
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
                        {userPlaylists.map(playlist => {
                            return (
                                <Container>
                                    <div className={"userPlaylistTablesHeaders mt-5 b-3"}>
                                        <h3><u>{playlist.userUsername}</u></h3>
                                    </div>
                                    <Table striped border hover size={"sm"}>
                                        <thead>
                                        <tr>
                                            <th>Playlist title</th>
                                            <th>Songs</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {playlist.playlists.map((element) => (
                                            <tr style={{verticalAlign: "middle"}}>
                                                <td>{element.playlistTitle}</td>
                                                <td>
                                                    {element.audioContents.map((ac) => (
                                                        <div>
                                                            {ac.audioContentTitle} published
                                                            on: {ac.audioContentDatePublished} (Genre: {ac.genreName})
                                                        </div>
                                                    ))}
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </Table>
                                </Container>
                            );
                        })}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default UserPlaylist;