import React, {Component, useEffect, useState} from "react";
import SongRepository from "../../repository/songRepository";

const MostPopularSongsPerYear = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        SongRepository.getMostPopular()
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
                        <h2>Year: {song.year}</h2>
                        <h2>Views: {song.maxViews}</h2>
                        <h2>Audio content id: {song.audioContentId}</h2>
                        <h2>Song title: {song.title}</h2>

                        <hr />
                    </div>
                );
            })}
        </>
    );
}

export default MostPopularSongsPerYear;