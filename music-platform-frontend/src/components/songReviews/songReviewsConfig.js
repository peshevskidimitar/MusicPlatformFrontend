import SongReviews from "./songReviews";

const SongReviewsConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: "/songReviews.js",
            element: <SongReviews />,
        },
    ],
};

export default SongReviewsConfig;