import React, {Component, useEffect, useState} from "react";

const Home = () => {

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
    }


    return (
        <>
            <h1 className={"homeH1"}>Welcome to</h1>
            <img src={require("./../../logoFinal.png")} width={250} height={200}/>
            <h2 className={"homeH2"}>Stream your own world!</h2>

        </>
    );
}

export default Home;