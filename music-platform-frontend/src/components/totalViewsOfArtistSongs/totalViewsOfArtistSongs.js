import React, {Component, useEffect, useState} from "react";
import SongRepository from "../../repository/songRepository";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

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


const TotalViewsOfArtistSongs = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        SongRepository.getTotalViews()
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
                            <StyledTableCell align="left">Artist name</StyledTableCell>
                            <StyledTableCell align="left">Views</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

            {songs.map(song => {
                return (

                    <StyledTableRow>
                        <StyledTableCell align="left">{song.fullName}</StyledTableCell>
                        <StyledTableCell align="left">{song.totalViews}</StyledTableCell>
                    </StyledTableRow>

                    // <div key={song.id}>
                    //     <h2>Artist id: {song.artistId}</h2>
                    //     <h2>Artist name: {song.fullName}</h2>
                    //     <h2>Views: {song.totalViews}</h2>
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

export default TotalViewsOfArtistSongs;