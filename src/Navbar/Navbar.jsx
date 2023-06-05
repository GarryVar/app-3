import React from "react";
import s from "./Navbar.module.css";

import NavList from "../Navlist/NavList";
import SettingList from "../SettingList/SettingList";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.layout}>

                <div className={s.separateBlock}>
                    <NavList navItemProps={props.navItemProps}/>
                </div>

                <div className={s.separateBlock}>
                    <SettingList settingItemProps={props.settingItemProps}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;