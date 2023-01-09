import React, {Component, useEffect, useState} from "react";
import SongRepository from "../../repository/songRepository";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

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
                    <MenuItem
                        style={{ maxWidth: "initial" }}
                        key={"All"}
                        value={null}
                    >
                        All
                    </MenuItem>
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

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>

                            <StyledTableCell align="left">Title</StyledTableCell>
                            <StyledTableCell align="left">Date published</StyledTableCell>
                            <StyledTableCell align="left">Content</StyledTableCell>
                            <StyledTableCell align="left">Date created</StyledTableCell>
                            <StyledTableCell align="left">User</StyledTableCell>
                            <StyledTableCell align="left">Grade</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

            {allSongReviews.map(songReview => {
                return (

                    <StyledTableRow>
                        <StyledTableCell align="left">{songReview.songTitle}</StyledTableCell>
                        <StyledTableCell align="left">{songReview.songDatePublished}</StyledTableCell>
                        <StyledTableCell align="left">{songReview.reviewContent}</StyledTableCell>
                        <StyledTableCell align="left">{songReview.reviewDateCreated}</StyledTableCell>
                        <StyledTableCell align="left">{songReview.userUsername}</StyledTableCell>
                        <StyledTableCell align="left">{songReview.reviewGrade}</StyledTableCell>
                    </StyledTableRow>

                    // <div key={songReview.id}>
                    //     <h2>Title: {songReview.songTitle}</h2>
                    //     <h2>Date published: {songReview.songDatePublished}</h2>
                    //     <h2>Content: {songReview.reviewContent}</h2>
                    //     <h2>Date created: {songReview.reviewDateCreated}</h2>
                    //     <h2>User: {songReview.userUsername}</h2>
                    //     <h2>Grade: {songReview.reviewGrade}</h2>
                    //
                    //     <hr />
                    // </div>
                );
            })}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
}

export default SongReviews;