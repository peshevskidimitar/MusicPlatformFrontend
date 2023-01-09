import React, {Component, useEffect, useState} from "react";
import PlaylistRepository from "../../repository/playlistRepository";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import UserRepository from "../../repository/userRepository";

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

const UserPlaylist = () => {

    const [userPlaylists, setUserPlaylists] = useState([]);

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

        PlaylistRepository.getAllPlaylists(username)
            .then((response) => {
                    setUserPlaylists(response.data)
                // console.log(response.data)
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


            {userPlaylists.map(playlist => {
                return (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <div className={"userPlaylistTablesHeaders"}>{playlist.userUsername}</div>
                                {/*<TableRow>*/}
                                {/*    <StyledTableCell align="left">{playlist.userUsername}</StyledTableCell>*/}
                                {/*    <StyledTableCell align="left"></StyledTableCell>*/}
                                {/*</TableRow>*/}
                                <TableRow>
                                    <StyledTableCell align="left">Playlist title</StyledTableCell>
                                    <StyledTableCell align="left">Songs</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {playlist.playlists.map((element) => (
                                    <TableRow>
                                        <StyledTableCell align="left">{element.playlistTitle}</StyledTableCell>
                                        <StyledTableCell align="left">
                                            {element.audioContents.map((ac) => (
                                                <li>
                                                    {ac.audioContentTitle} published on: {ac.audioContentDatePublished} (Genre: {ac.genreName})
                                                </li>
                                            ))}

                                        </StyledTableCell>
                                    </TableRow>
                                ))}

                        {/*<h2>Audio content title: {playlist.audioContentTitle}</h2>*/}
                        {/*<h2>Date published: {playlist.audioContentDatePublished}</h2>*/}
                        {/*<h2>Genre: {playlist.genreName}</h2>*/}

                        {/*<hr />*/}

                            </TableBody>
                        </Table>
                    </TableContainer>
                );
            })}
        </>
    );
}

export default UserPlaylist;