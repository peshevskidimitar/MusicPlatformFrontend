import React, {Component, useEffect, useState} from "react";
import SongRepository from "../../repository/songRepository";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";

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

const MostPopularSongsPerYear = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        SongRepository.getMostPopular()
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

                            <StyledTableCell align="left">Year</StyledTableCell>
                            <StyledTableCell align="left">Song title</StyledTableCell>
                            <StyledTableCell align="left">Views</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

            {songs.map(song => {
                return (

                    <StyledTableRow>
                        <StyledTableCell align="left">{song.year}</StyledTableCell>
                        <StyledTableCell align="left">{song.title}</StyledTableCell>
                        <StyledTableCell align="left">{song.maxViews}</StyledTableCell>
                    </StyledTableRow>

                    // <div key={song.id}>
                    //     <h2>Year: {song.year}</h2>
                    //     <h2>Views: {song.maxViews}</h2>
                    //     <h2>Audio content id: {song.audioContentId}</h2>
                    //     <h2>Song title: {song.title}</h2>
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

export default MostPopularSongsPerYear;