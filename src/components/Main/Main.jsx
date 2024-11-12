import React from "react";
import MainSlideBar from "../MainSlideBar/MainSlideBar";
import Navigation from "../Navigation/Navigation";
import MainCenterBlock from "../MainCenterBlock/MainCenterBlock";


function Main() {

    return (
        <>
            <Navigation />
            <MainCenterBlock />
            <MainSlideBar />
        </>
    )

}

export default Main;
