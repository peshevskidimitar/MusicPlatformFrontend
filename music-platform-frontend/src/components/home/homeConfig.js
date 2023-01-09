import Home from "./home";

const HomeConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: "/home.js",
            element: <Home />,
        },
    ],
};

export default HomeConfig;