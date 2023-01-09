import React, {Component, useEffect, useState} from "react";
import PlaylistRepository from "../../repository/playlistRepository";
import playlistRepository from "../../repository/playlistRepository";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import UserRepository from "../../repository/userRepository";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

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

const CountOfSongsPerPlaylist = () => {

    const [songs, setSongs] = useState([]);

    const [selectedUser, setSelectedUser] = useState({
        title: ""
    });

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = (username) => {

        UserRepository.getAllUsers()
            .then((response)=>{
                setUsers(response.data)
            })

        playlistRepository.getCountOfSongs(username)
            .then((response) => {
                    setSongs(response.data)
                }
            );
    }

    const handleChangeUser = (e) => {
        setSelectedUser({
            ...selectedUser,
            [e.target.name]: e.target.value,
        });

        fetchData(e.target.value);
    };


    return (
        <>

            <FormControl style={{ width: 60 + "%" }} margin={"normal"}>
                <InputLabel id="demo-simple-select-label">
                    User:
                </InputLabel>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="User"
                    onChange={handleChangeUser}
                    name={"username"}
                    value={selectedUser.username}
                >
                    <MenuItem
                        style={{ maxWidth: "initial" }}
                        key={"All"}
                        value={null}
                    >
                        All
                    </MenuItem>
                    {users.map((element) => (
                        <MenuItem
                            style={{ maxWidth: "initial" }}
                            key={element.username}
                            value={element.username}
                        >
                            {element.username}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>

                            <StyledTableCell align="left">Title</StyledTableCell>
                            <StyledTableCell align="left">User</StyledTableCell>
                            <StyledTableCell align="left">Count of songs</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>


                    {songs.map(song => {
                return (

                    <StyledTableRow>
                        <StyledTableCell align="left">{song.title}</StyledTableCell>
                        <StyledTableCell align="left">{song.username}</StyledTableCell>
                        <StyledTableCell align="left">{song.countOfSongs}</StyledTableCell>
                    </StyledTableRow>
                );
            })}

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default CountOfSongsPerPlaylist;