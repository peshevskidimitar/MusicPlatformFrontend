import InsertSongIntoPlaylist from "./insertSongIntoPlaylist";

const InsertSongIntoPlaylistConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: "/insertSongIntoPlaylist.js",
            element: <InsertSongIntoPlaylist />,
        },
    ],
};

export default InsertSongIntoPlaylistConfig;