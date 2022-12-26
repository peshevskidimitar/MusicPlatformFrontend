import Song from "./songs";

const SongReviewsConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: "/song.js",
            element: <Song />,
        },
    ],
};

export default SongReviewsConfig;