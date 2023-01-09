import React, {Component, useEffect, useState} from "react";
import SongRepository from "../../repository/songRepository";
import {MenuItem} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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

const Song = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        SongRepository.getAllSongs()
            .then((response) => {
                    setSongs(response.data)
                }
            );
    }


    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>

                            <StyledTableCell align="left">Song title</StyledTableCell>
                            <StyledTableCell align="left">Song Date Published</StyledTableCell>
                            <StyledTableCell align="left">Views</StyledTableCell>
                            <StyledTableCell align="left">Genre</StyledTableCell>
                            <StyledTableCell align="left">Artist name</StyledTableCell>
                            <StyledTableCell align="left">Artist country</StyledTableCell>
                            <StyledTableCell align="left">Album</StyledTableCell>
                            <StyledTableCell align="left">Record Label</StyledTableCell>
                            <StyledTableCell align="left">Music Professionals</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {songs.map(songReview => {
                            return (
                                <StyledTableRow>
                                    <StyledTableCell align="left">{songReview.songTitle}</StyledTableCell>
                                    <StyledTableCell align="left">{songReview.songDatePublished}</StyledTableCell>
                                    <StyledTableCell align="left">{songReview.songViews}</StyledTableCell>
                                    <StyledTableCell align="left">{songReview.genreName}</StyledTableCell>
                                    <StyledTableCell align="left">{songReview.artistFullName}</StyledTableCell>
                                    <StyledTableCell align="left">{songReview.artistCountry}</StyledTableCell>
                                    <StyledTableCell align="left">{songReview.albumTitle}</StyledTableCell>
                                    <StyledTableCell align="left">{songReview.recordLabelName}</StyledTableCell>
                                    <StyledTableCell align="left">
                                        {songReview.musicProfessionals.map((element) => (
                                            <div>
                                                {element.musicProfessionalName} {element.musicProfessionalSurname} as {element.musicProfessionalProfession}
                                            </div>
                                        ))}
                                    </StyledTableCell>
                                </StyledTableRow>
                            );
                        })}
                        {/*{rows.map((row) => (*/}
                        {/*    <StyledTableRow key={row.name}>*/}
                        {/*        <StyledTableCell component="th" scope="row">*/}
                        {/*            {row.name}*/}
                        {/*        </StyledTableCell>*/}
                        {/*        <StyledTableCell align="right">{row.calories}</StyledTableCell>*/}
                        {/*        <StyledTableCell align="right">{row.fat}</StyledTableCell>*/}
                        {/*        <StyledTableCell align="right">{row.carbs}</StyledTableCell>*/}
                        {/*        <StyledTableCell align="right">{row.protein}</StyledTableCell>*/}
                        {/*    </StyledTableRow>*/}
                        {/*))}*/}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Song;