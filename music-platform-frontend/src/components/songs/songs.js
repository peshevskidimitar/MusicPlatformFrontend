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

                            <StyledTableCell align="right">Song title</StyledTableCell>
                            <StyledTableCell align="right">Song Date Published</StyledTableCell>
                            <StyledTableCell align="right">Views</StyledTableCell>
                            <StyledTableCell align="right">Genre</StyledTableCell>
                            <StyledTableCell align="right">Artist name</StyledTableCell>
                            <StyledTableCell align="right">Artist country</StyledTableCell>
                            <StyledTableCell align="right">Album</StyledTableCell>
                            <StyledTableCell align="right">Record Label</StyledTableCell>
                            <StyledTableCell align="right">Music Professionals</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {songs.map(songReview => {
                            return (
                                <StyledTableRow>
                                    <StyledTableCell align="right">{songReview.songTitle}</StyledTableCell>
                                    <StyledTableCell align="right">{songReview.songDatePublished}</StyledTableCell>
                                    <StyledTableCell align="right">{songReview.songViews}</StyledTableCell>
                                    <StyledTableCell align="right">{songReview.genreName}</StyledTableCell>
                                    <StyledTableCell align="right">{songReview.artistFullName}</StyledTableCell>
                                    <StyledTableCell align="right">{songReview.artistCountry}</StyledTableCell>
                                    <StyledTableCell align="right">{songReview.albumTitle}</StyledTableCell>
                                    <StyledTableCell align="right">{songReview.recordLabelName}</StyledTableCell>
                                    <StyledTableCell align="right">
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