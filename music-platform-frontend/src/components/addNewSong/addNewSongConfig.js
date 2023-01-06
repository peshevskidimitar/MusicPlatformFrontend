import AddNewSong from "./addNewSong";

const AddNewSongConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: "/addNewSong.js",
            element: <AddNewSong />,
        },
    ],
};

export default AddNewSongConfig;