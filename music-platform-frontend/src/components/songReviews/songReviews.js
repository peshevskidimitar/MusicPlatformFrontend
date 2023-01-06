import React, {Component, useEffect, useState} from "react";
import SongRepository from "../../repository/songRepository";
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

            <FormControl style={{ width: 60 + "%" }} margin={"normal"}>
                <InputLabel id="demo-simple-select-label">
                    Song:
                </InputLabel>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Song"
                    onChange={handleChangeSong}
                    name={"songTitle"}
                    value={selectedSong.songTitle}
                >
                    {songs.map((element) => (
                        <MenuItem
                            style={{ maxWidth: "initial" }}
                            key={element.title}
                            value={element.title}
                        >
                            {element.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <br/>

            {allSongReviews.map(songReview => {
                return (
                    <div key={songReview.id}>
                        <h2>Title: {songReview.songTitle}</h2>
                        <h2>Date published: {songReview.songDatePublished}</h2>
                        <h2>Content: {songReview.reviewContent}</h2>
                        <h2>Date created: {songReview.reviewDateCreated}</h2>
                        <h2>User: {songReview.userUsername}</h2>
                        <h2>Grade: {songReview.reviewGrade}</h2>

                        <hr />
                    </div>
                );
            })}
        </>
    );
}

export default SongReviews;