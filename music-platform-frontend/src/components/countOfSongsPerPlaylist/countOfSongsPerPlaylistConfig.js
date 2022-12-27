import CountOfSongsPerPlaylist from "./countOfSongsPerPlaylist";

const CountOfSongsPerPlaylistConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: "/countOfSongsPerPlaylist.js",
            element: <CountOfSongsPerPlaylist />,
        },
    ],
};

export default CountOfSongsPerPlaylistConfig;