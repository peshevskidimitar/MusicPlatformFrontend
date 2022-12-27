import Podcast from "./podcast";

const PodcastConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: "/podcast.js",
            element: <Podcast />,
        },
    ],
};

export default PodcastConfig;