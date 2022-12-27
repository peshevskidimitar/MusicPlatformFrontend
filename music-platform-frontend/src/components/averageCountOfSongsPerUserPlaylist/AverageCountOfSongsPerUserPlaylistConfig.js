import AverageCountOfSongsPerUserPlaylist from "./averageCountOfSongsPerUserPlaylist";

const AverageCountOfSongsPerUserPlaylistConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: "/averageCountOfSongsPerUserPlaylist.js",
            element: <AverageCountOfSongsPerUserPlaylist />,
        },
    ],
};

export default AverageCountOfSongsPerUserPlaylistConfig;