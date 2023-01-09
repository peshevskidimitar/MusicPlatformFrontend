import React, {Component, useEffect, useState} from "react";
import AudioContentRepository from "../../repository/audioContentRepository";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
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

const MonthlyReviewsAndAverageGradePerAudioContent = () => {

    const [audioContents, setAudioContents] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        AudioContentRepository.getAudioContentStats()
            .then((response) => {
                    setAudioContents(response.data)
                }
            );
    }


    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>

                            <StyledTableCell align="left">Content title</StyledTableCell>
                            <StyledTableCell align="left">Year</StyledTableCell>
                            <StyledTableCell align="left">Month</StyledTableCell>
                            <StyledTableCell align="left">Total reviews</StyledTableCell>
                            <StyledTableCell align="left">Average grade</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                    {audioContents.map(ac => {
                return (

                    <StyledTableRow>
                        <StyledTableCell align="left">{ac.title}</StyledTableCell>
                        <StyledTableCell align="left">{ac.year}</StyledTableCell>
                        <StyledTableCell align="left">{ac.month}</StyledTableCell>
                        <StyledTableCell align="left">{ac.totalReviews}</StyledTableCell>
                        <StyledTableCell align="left">{ac.averageGrade}</StyledTableCell>
                    </StyledTableRow>

                    // <div key={ac.id}>
                    //     <h2>Content title: {ac.title}</h2>
                    //     <h2>Month: {ac.month}</h2>
                    //     <h2>Total reviews: {ac.totalReviews}</h2>
                    //     <h2>Average grade: {ac.averageGrade}</h2>
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

export default MonthlyReviewsAndAverageGradePerAudioContent;