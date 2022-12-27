import React, {Component, useEffect, useState} from "react";
import SongRepository from "../../repository/songRepository";

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
            {songs.map(song => {
                return (
                    <div key={song.id}>
                        <h2>Genre name: {song.name}</h2>
                        <h2>Count of songs: {song.count}</h2>

                        <hr />
                    </div>
                );
            })}
        </>
    );
}

export default CountOfSongsPerGenre;