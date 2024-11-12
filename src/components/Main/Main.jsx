import MainCenterBlock from "../MainCenterBlock/MainCenterBlock";
import MainSlideBar from "../MainSlideBar/MainSlideBar";
import Navigation from "../Navigation/Navigation"
import React from "react";

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