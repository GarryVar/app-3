import React from "react";
import s from './App.module.css';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import Svgsprite from "./Svgsprite/Svgsprite";

const App = (props) => {
    return (
        <div className={s.wrapper}>
            <Svgsprite />
            <Header logoState={props.logoState} />
            <Navbar navItemProps={props.navItemProps} settingItemProps={props.settingItemProps}/>
            <Profile />
        </div>
    )
}

export default App;
