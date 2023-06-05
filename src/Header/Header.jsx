import React from "react";
import s from "./Header.module.css";
import Logo from "../Logo/Logo";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.layout}>
                <Logo logoState={props.logoState}/>
            </div>
        </header>
    )
}

export default Header;