import React, {Component, useEffect, useState} from "react";
import UserRepository from "../../repository/userRepository";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AudioContentRepository from "../../repository/audioContentRepository";
import ReviewRepository from "../../repository/reviewRepository";
import PlaylistRepository from "../../repository/playlistRepository";
import SongRepository from "../../repository/songRepository";

const InsertSongIntoPlaylist = () => {

    const navigate=useNavigate();

    const [playlists, setPlaylists] = useState([]);
    const [audioContents, setAudioContents] = useState([]);

    const [formData, setFormData] = useState({
        audioContentId: null,
        playlistId: null
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        PlaylistRepository.getAll()
            .then((response) => {
                    setPlaylists(response.data)
                }
            );
        AudioContentRepository.getAll()
            .then((response) => {
                    setAudioContents(response.data)
                }
            );
    }


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        console.log(formData)
    };


    const sendSongToPlaylist = () => {
        if (
            formData.playlistId == null ||
            formData.audioContentId == null
        ) {

        } else {
            SongRepository.insertSongIntoPlaylist(formData).then(()=>{
                navigate("/playlists/getCountSongs");
            });
            setFormData({
                audioContentId: null,
                playlistId: null
            });
        }
    };



    return (
        <>

            <FormControl style={{ width: 60 + "%" }} margin={"normal"}>
                <InputLabel id="demo-simple-select-label">
                    Audio content
                </InputLabel>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Audio content"
                    onChange={handleChange}
                    name={"audioContentId"}
                    value={formData.audioContentId}

                >
                    {audioContents.map((element) => (
                        <MenuItem
                            style={{ maxWidth: "initial" }}
                            key={element.id}
                            value={element.id}
                        >
                            {element.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <br/>

            <FormControl style={{ width: 60 + "%" }} margin={"normal"}>
                <InputLabel id="demo-simple-select-label">
                    Playlist
                </InputLabel>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Playlist"
                    onChange={handleChange}
                    name={"playlistId"}
                    value={formData.playlistId}
                >
                    {playlists.map((element) => (
                        <MenuItem
                            style={{ maxWidth: "initial" }}
                            key={element.id}
                            value={element.id}
                        >
                            {element.user.username}'s {element.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <br/>

            <Button
                onClick={sendSongToPlaylist}
                style={{ width: 30 + "%" }}
                type="button"
                variant="contained"
                className="flex text-white ms-auto mt-16"
                color="success"
            >
                Add new review
            </Button>


        </>
    );
}

export default InsertSongIntoPlaylist;