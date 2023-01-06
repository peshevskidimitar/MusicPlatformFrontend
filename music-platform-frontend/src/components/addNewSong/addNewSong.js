import React, {Component, useEffect, useState} from "react";
import PlaylistRepository from "../../repository/playlistRepository";
import UserRepository from "../../repository/userRepository";
import PlaylistTypeRepository from "../../repository/playlistTypeRepository";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AudioContentRepository from "../../repository/audioContentRepository";
import ReviewRepository from "../../repository/reviewRepository";
import GenreRepository from "../../repository/genreRepository";
import AlbumRepository from "../../repository/albumRepository";
import RecordLabelRepository from "../../repository/recordLabelRepository";
import ArtistRepository from "../../repository/artistRepository";
import SongRepository from "../../repository/songRepository";
import {useForm} from "react-hook-form";

const AddNewSong = () => {

    const navigate=useNavigate();

    const [genres, setGenres] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [recordLabels, setRecordLabels] = useState([]);
    const [artists, setArtists] = useState([]);

    const { register, handleSubmit } = useForm();

    const [formDataSong, setFormDataSong] = useState({
        title: "",
        datePublished: null,
        genreId: null,
        lyrics: "",
        albumId: null,
        recordLabelId: null,
        artistId: null,
        song: "Upload a file"
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        GenreRepository.getAll()
            .then((response) => {
                    setGenres(response.data)
                }
            );
        AlbumRepository.getAll()
            .then((response) => {
                    setAlbums(response.data)
                }
            );

        RecordLabelRepository.getAll()
            .then((response) => {
                    setRecordLabels(response.data)
                }
            );

        ArtistRepository.getAll()
            .then((response) => {
                    setArtists(response.data)
                }
            );
    }


    const handleChangeSong = (e) => {
        setFormDataSong({
            ...formDataSong,
            [e.target.name]: e.target.value,
        });
         console.log(formDataSong)
    };


    const sendSongData = async (data) => {
        if (
            formDataSong.title ==="" ||
            formDataSong.datePublished== null ||
            formDataSong.genreId==null ||
            formDataSong.albumId== null ||
            formDataSong.recordLabelId== null ||
            formDataSong.artistId== null
        ) {

        } else {
            const formData = new FormData();
            // console.log(data.song[0]);
            formData.append("song", data.song[0]);
            formData.append("title", formDataSong.title);
            formData.append("datePublished", formDataSong.datePublished);
            formData.append("genreId", formDataSong.genreId);
            formData.append("lyrics", formDataSong.lyrics);
            formData.append("albumId", formDataSong.albumId);
            formData.append("recordLabelId", formDataSong.recordLabelId);
            formData.append("artistId", formDataSong.artistId);

            SongRepository.addNewSong(formData).then(()=>{
                navigate("/songs/all");
            });
            setFormDataSong({
                title: "",
                datePublished: null,
                genreId: null,
                lyrics: "",
                albumId: null,
                recordLabelId: null,
                artistId: null
            });
        }
    };



    return (
        <>
            <form onSubmit={handleSubmit(sendSongData)}>

            <FormControl style={{ width: 60 + "%" }}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    name={"title"}
                    margin={"normal"}
                    onChange={handleChangeSong}
                    value={formDataSong.title}
                />
            </FormControl>

            <br/>

            <FormControl style={{ width: 60 + "%" }}>
                <InputLabel id="demo-simple-input-label">Date Published</InputLabel>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    name={"datePublished"}
                    margin={"normal"}
                    onChange={handleChangeSong}
                    value={formDataSong.datePublished}
                    type={"date"}
                />
            </FormControl>

            <br/>

            <FormControl style={{ width: 60 + "%" }} margin={"normal"}>
                <InputLabel id="demo-simple-select-label">
                    Genre:
                </InputLabel>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Genre"
                    onChange={handleChangeSong}
                    name={"genreId"}
                    value={formDataSong.genreId}

                >
                    {genres.map((element) => (
                        <MenuItem
                            style={{ maxWidth: "initial" }}
                            key={element.id}
                            value={element.id}
                        >
                            {element.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <br/>

            <FormControl style={{ width: 60 + "%" }} margin={"normal"}>
                <InputLabel id="demo-simple-select-label">
                    Artist:
                </InputLabel>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Artist"
                    onChange={handleChangeSong}
                    name={"artistId"}
                    value={formDataSong.artistId}
                >
                    {artists.map((element) => (
                        <MenuItem
                            style={{ maxWidth: "initial" }}
                            key={element.id}
                            value={element.id}
                        >
                            {element.fullName}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <br/>

            <FormControl style={{ width: 60 + "%" }} margin={"normal"}>
                <InputLabel id="demo-simple-select-label">
                    Album:
                </InputLabel>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Album"
                    onChange={handleChangeSong}
                    name={"albumId"}
                    value={formDataSong.albumId}
                >
                    {albums.map((element) => (
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
                    Record Label:
                </InputLabel>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Record Label"
                    onChange={handleChangeSong}
                    name={"recordLabelId"}
                    value={formDataSong.recordLabelId}
                >
                    {recordLabels.map((element) => (
                        <MenuItem
                            style={{ maxWidth: "initial" }}
                            key={element.id}
                            value={element.id}
                        >
                            {element.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <br/>

            <FormControl style={{ width: 60 + "%" }}>
                <TextField
                    fullWidth
                    multiline
                    id="outlined-basic"
                    label="Lyrics"
                    variant="outlined"
                    name={"lyrics"}
                    margin={"normal"}
                    onChange={handleChangeSong}
                    value={formDataSong.lyrics}
                />
            </FormControl>

            <br/>

            <Button
                variant="contained"
                component="label"
            >
                {formDataSong.song.split("\\")[formDataSong.song.split("\\").length-1]}
                <input
                    type="file"
                    {...register("song")}
                    hidden
                    onInput={handleChangeSong}
                    name={"song"}
                    className="form-control" id="customFile"
                />
            </Button>

            <br/>


            {/*<Button*/}
            {/*    onClick={sendSongData}*/}
            {/*    style={{ width: 30 + "%" }}*/}
            {/*    type="button"*/}
            {/*    variant="contained"*/}
            {/*    className="flex text-white ms-auto mt-16"*/}
            {/*    color="primary"*/}
            {/*>*/}
            {/*    Add new song*/}
            {/*</Button>*/}

                <Button
                    type="button"
                    variant="contained"
                    color="primary">

                    <input type="submit" className={"rounded"}
                           value={"Add new Song"}/>
                </Button>

            </form>
        </>
    );
}

export default AddNewSong;