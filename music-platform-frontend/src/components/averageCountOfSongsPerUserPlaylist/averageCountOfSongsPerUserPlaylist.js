import React, {Component, useEffect, useState} from "react";
import PlaylistRepository from "../../repository/playlistRepository";

const AverageCountOfSongsPerUserPlaylist = () => {

    const [userPlaylistStats, setUserPlaylistStats] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        PlaylistRepository.getAllUserStatsForPlaylists()
            .then((response) => {
                    setUserPlaylistStats(response.data)
                }
            );
    }


    return (
        <>
            {userPlaylistStats.map(playlist => {
                return (
                    <div key={playlist.id}>
                        <h2>Username: {playlist.username}</h2>
                        <h2>Average count of songs: {playlist.averageCountOfSongs}</h2>

                        <hr />
                    </div>
                );
            })}
        </>
    );
}

export default AverageCountOfSongsPerUserPlaylist;