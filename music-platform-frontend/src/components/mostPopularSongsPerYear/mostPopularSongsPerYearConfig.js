import MostPopularSongsPerYear from "./mostPopularSongsPerYear";

const MostPopularSongsPerYearConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: "/mostPopularSongsPerYear.js",
            element: <MostPopularSongsPerYear />,
        },
    ],
};

export default MostPopularSongsPerYearConfig;