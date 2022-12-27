import React, {Component, useEffect, useState} from "react";
import PlaylistRepository from "../../repository/playlistRepository";

const UserPlaylist = () => {

    const [userPlaylists, setUserPlaylists] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        PlaylistRepository.getAllPlaylists()
            .then((response) => {
                    setUserPlaylists(response.data)
                }
            );
    }


    return (
        <>
            {userPlaylists.map(playlist => {
                return (
                    <div key={playlist.id}>
                        <h2>Username: {playlist.userUsername}</h2>
                        <h2>Title: {playlist.playlistTitle}</h2>
                        <h2>Audio content title: {playlist.audioContentTitle}</h2>
                        <h2>Date published: {playlist.audioContentDatePublished}</h2>
                        <h2>Genre: {playlist.genreName}</h2>

                        <hr />
                    </div>
                );
            })}
        </>
    );
}

export default UserPlaylist;