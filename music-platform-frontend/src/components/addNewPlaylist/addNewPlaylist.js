import React, {Component, useEffect, useState} from "react";
import PlaylistRepository from "../../repository/playlistRepository";
import UserRepository from "../../repository/userRepository";
import PlaylistTypeRepository from "../../repository/playlistTypeRepository";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddNewPlaylist = () => {

    const navigate=useNavigate();

    const [users, setUsers] = useState([]);
    const [playlistTypes, setPlaylistTypes] = useState([]);

    const [formDataPlaylist, setFormDataPlaylist] = useState({
        title: "",
        playlistTypeId: null,
        userId: null,
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        UserRepository.getAllUsers()
            .then((response) => {
                    setUsers(response.data)
                }
            );
        PlaylistTypeRepository.getAllPlaylistTypes()
            .then((response) => {
                    setPlaylistTypes(response.data)
                }
            );
    }


    const handleChangePlaylist = (e) => {
        setFormDataPlaylist({
            ...formDataPlaylist,
            [e.target.name]: e.target.value,
        });
        console.log(formDataPlaylist)
    };


    const sendPlaylistData = () => {
        if (
            formDataPlaylist.title === "" ||
            formDataPlaylist.userId == null ||
            formDataPlaylist.playlistTypeId == null
        ) {

        } else {
            PlaylistRepository.addPlaylist(formDataPlaylist).then(()=>{
                navigate("/playlists/all");
            });
            setFormDataPlaylist({
                title: "",
                userId: null,
                playlistTypeId: null,
            });
        }
    };



    return (
        <>
            <FormControl style={{ width: 60 + "%" }}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Playlist title"
                    variant="outlined"
                    name={"title"}
                    margin={"normal"}
                    onChange={handleChangePlaylist}
                    value={formDataPlaylist.title}
                />
            </FormControl>

            <br/>

            <FormControl style={{ width: 60 + "%" }} margin={"normal"}>
                <InputLabel id="demo-simple-select-label">
                    Playlist type
                </InputLabel>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Playlist type"
                    onChange={handleChangePlaylist}
                    name={"playlistTypeId"}
                    value={formDataPlaylist.playlistTypeId}

                >
                    {playlistTypes.map((element) => (
                        <MenuItem
                            style={{ maxWidth: "initial" }}
                            key={element.id}
                            value={element.id}
                        >
                            {element.type}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <br/>

            <FormControl style={{ width: 60 + "%" }} margin={"normal"}>
                <InputLabel id="demo-simple-select-label">
                    User
                </InputLabel>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="User"
                    onChange={handleChangePlaylist}
                    name={"userId"}
                    value={formDataPlaylist.userId}
                >
                    {users.map((element) => (
                        <MenuItem
                            style={{ maxWidth: "initial" }}
                            key={element.id}
                            value={element.id}
                        >
                            {element.username}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <br/>

            <Button
                onClick={sendPlaylistData}
                style={{ width: 30 + "%" }}
                type="button"
                variant="contained"
                className="flex text-white ms-auto mt-16"
                color="primary"
            >
                Add new playlist
            </Button>


        </>
    );
}

export default AddNewPlaylist;