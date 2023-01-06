import AddNewPlaylist from "./addNewPlaylist";

const AddNewPlaylistConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: "/addNewPlaylist.js",
            element: <AddNewPlaylist />,
        },
    ],
};

export default AddNewPlaylistConfig;