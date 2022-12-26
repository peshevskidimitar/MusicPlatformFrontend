import React, {Component, useEffect, useState} from "react";
import SongRepository from "../../repository/songRepository";

const Song = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        SongRepository.getAllSongs()
            .then((response) => {
                    setSongs(response.data)
                }
            );
    }


    return (
        <>
            {songs.map(songReview => {
                return (
                    <div key={songReview.id}>
                        <h2>Title: {songReview.songTitle}</h2>
                        <h2>Date published: {songReview.songDatePublished}</h2>
                        <h2>Views: {songReview.songViews}</h2>
                        <h2>Genre: {songReview.genreName}</h2>
                        <h2>Artist: {songReview.artistFullName}</h2>
                        <h2>Country: {songReview.artistCountry}</h2>
                        <h2>Album: {songReview.albumTitle}</h2>
                        <h2>Record Label: {songReview.recordLabelName}</h2>
                        <h2>Music Professional name: {songReview.musicProfessionalName}</h2>
                        <h2>Music Professional surname: {songReview.musicProfessionalSurname}</h2>
                        <h2>Profession: {songReview.musicProfessionalProfession}</h2>

                        <hr />
                    </div>
                );
            })}
        </>
    );
}

export default Song;