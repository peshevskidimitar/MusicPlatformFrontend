import React, {Component, useEffect, useState} from "react";
import PlaylistRepository from "../../repository/playlistRepository";
import playlistRepository from "../../repository/playlistRepository";

const CountOfSongsPerPlaylist = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        playlistRepository.getCountOfSongs()
            .then((response) => {
                    setSongs(response.data)
                }
            );
    }


    return (
        <>
            {songs.map(song => {
                return (
                    <div key={song.id}>
                        <h2>Title: {song.title}</h2>
                        <h2>Count of songs: {song.countOfSongs}</h2>

                        <hr />
                    </div>
                );
            })}
        </>
    );
}

export default CountOfSongsPerPlaylist;