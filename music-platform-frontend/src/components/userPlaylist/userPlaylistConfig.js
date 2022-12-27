import UserPlaylist from "./userPlaylist";

const UserPlaylistConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: "/userPlaylist.js",
            element: <UserPlaylist />,
        },
    ],
};

export default UserPlaylistConfig;