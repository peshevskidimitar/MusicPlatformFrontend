import CountOfSongsPerGenre from "./countOfSongsPerGenre";

const CountOfSongsPerGenreConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: "/countOfSongsPerGenre.js",
            element: <CountOfSongsPerGenre />,
        },
    ],
};

export default CountOfSongsPerGenreConfig;