import React from "react";
import s from "./Header.module.css";
import SearchForm from "../SearchForm/SearchForm";
import CallToolbar from "../CallToolbar/CallToolbar";


const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.layout}>
                <SearchForm />
                <CallToolbar />
                <p className={s.slogan}>Cactuchat</p>
            </div>
        </header>
    )
}

export default Header;