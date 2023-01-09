import React, {Component, useEffect, useState} from "react";
import SongRepository from "../../repository/songRepository";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";

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


const CountOfSongsPerGenre = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        SongRepository.getSongsByGenre()
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

                            <StyledTableCell align="left">Genre name</StyledTableCell>
                            <StyledTableCell align="left">Count of songs</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
            {songs.map(song => {
                return (
                    <StyledTableRow>
                        <StyledTableCell align="left">{song.name}</StyledTableCell>
                        <StyledTableCell align="left">{song.count}</StyledTableCell>
                    </StyledTableRow>

                    // <div key={song.id}>
                    //     <h2>Genre name: </h2>
                    //     <h2>Count of songs: </h2>
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

export default CountOfSongsPerGenre;