import React, {Component, useEffect, useState} from "react";
import SongRepository from "../../repository/songRepository";

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
            {songs.map(song => {
                return (
                    <div key={song.id}>
                        <h2>Artist id: {song.artistId}</h2>
                        <h2>Artist name: {song.fullName}</h2>
                        <h2>Views: {song.totalViews}</h2>

                        <hr />
                    </div>
                );
            })}
        </>
    );
}

export default TotalViewsOfArtistSongs;