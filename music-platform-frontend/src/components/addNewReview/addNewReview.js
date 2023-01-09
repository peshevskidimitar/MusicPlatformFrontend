import React, {Component, useEffect, useState} from "react";
import PlaylistRepository from "../../repository/playlistRepository";
import UserRepository from "../../repository/userRepository";
import PlaylistTypeRepository from "../../repository/playlistTypeRepository";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AudioContentRepository from "../../repository/audioContentRepository";
import ReviewRepository from "../../repository/reviewRepository";

const AddNewReview = () => {

    const navigate=useNavigate();

    const [users, setUsers] = useState([]);
    const [audioContents, setAudioContents] = useState([]);

    const [formDataReview, setFormDataReview] = useState({
        content: "",
        audioContentId: null,
        userId: null,
        grade: 5
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
        AudioContentRepository.getAll()
            .then((response) => {
                    setAudioContents(response.data)
                }
            );
    }


    const handleChangeReview = (e) => {
        setFormDataReview({
            ...formDataReview,
            [e.target.name]: e.target.value,
        });
        console.log(formDataReview)
    };


    const sendReviewData = () => {
        if (
            formDataReview.content === "" ||
            formDataReview.userId == null ||
            formDataReview.audioContentId == null
        ) {

        } else {
            ReviewRepository.addNewReview(formDataReview).then(()=>{
                navigate("/songs/reviews");
            });
            setFormDataReview({
                content: "",
                audioContentId: null,
                userId: null,
                grade: 5
            });
        }
    };



    return (
        <>

            <FormControl style={{ width: 60 + "%" }} margin={"normal"}>
                <InputLabel id="demo-simple-select-label">
                    Audio content:
                </InputLabel>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Audio content"
                    onChange={handleChangeReview}
                    name={"audioContentId"}
                    value={formDataReview.audioContentId}
                    required={true}
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
                    User:
                </InputLabel>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="User"
                    onChange={handleChangeReview}
                    name={"userId"}
                    value={formDataReview.userId}
                    required={true}
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

            <FormControl style={{ width: 60 + "%" }}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Grade"
                    variant="outlined"
                    name={"grade"}
                    margin={"normal"}
                    onChange={handleChangeReview}
                    value={formDataReview.grade}
                    type={"number"}
                    required={true}
                />
            </FormControl>

            <br/>

            <FormControl style={{ width: 60 + "%" }}>
                <TextField
                    fullWidth
                    multiline
                    id="outlined-basic"
                    label="Content"
                    variant="outlined"
                    name={"content"}
                    margin={"normal"}
                    onChange={handleChangeReview}
                    value={formDataReview.content}
                    required={true}
                />
            </FormControl>

            <br/>

            <Button
                onClick={sendReviewData}
                style={{ width: 30 + "%" }}
                type="button"
                variant="contained"
                className="flex text-white ms-auto mt-16"
                color="primary"
            >
                Add new review
            </Button>


        </>
    );
}

export default AddNewReview;