import React, {Component, useEffect, useState} from "react";
import PodcastRepository from "../../repository/podcastRepository";
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

const Podcast = () => {

    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        PodcastRepository.getAllPodcasts()
            .then((response) => {
                    setPodcasts(response.data)
                console.log(response.data)
                }
            );
    }


    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>

                            <StyledTableCell align="left">Podcast title</StyledTableCell>
                            <StyledTableCell align="left">Podcast Date Published</StyledTableCell>
                            <StyledTableCell align="left">Description</StyledTableCell>
                            <StyledTableCell align="left">Genre</StyledTableCell>
                            <StyledTableCell align="left">Music Professionals</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
            {podcasts.map(podcast => {
                return (
                    <StyledTableRow>
                        <StyledTableCell align="left">{podcast.podcastTitle}</StyledTableCell>
                        <StyledTableCell align="left">{podcast.podcastDatePublished}</StyledTableCell>
                        <StyledTableCell align="left">{podcast.podcastDescription}</StyledTableCell>
                        <StyledTableCell align="left">{podcast.genreName}</StyledTableCell>
                        <StyledTableCell align="left">
                            {podcast.musicProfessionals.map((element) => (
                                <div>
                                    {element.musicProfessionalName} {element.musicProfessionalSurname} as {element.musicProfessionalProfession}
                                </div>
                            ))}
                        </StyledTableCell>


                    </StyledTableRow>

                    // <div key={podcast.id}>
                    //     <h2>Title: {podcast.podcastTitle}</h2>
                    //     <h2>Date published: {podcast.podcastDatePublished}</h2>
                    //     <h2>Description: {podcast.podcastDescription}</h2>
                    //     <h2>Genre: {podcast.genreName}</h2>
                    //     <h2>Name: {podcast.musicProfessionalName}</h2>
                    //     <h2>Surname: {podcast.musicProfessionalSurname}</h2>
                    //     <h2>Profession: {podcast.musicProfessionalProfession}</h2>
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

export default Podcast;