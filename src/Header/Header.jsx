import React from "react";
import s from "./Header.module.css";
import SearchForm from "../SearchForm/SearchForm";
// import Logo from "../Logo/Logo";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.layout}>
                <SearchForm />
                <p className={s.slogan}>Cactuchat</p>
                {/*<Logo logoState={props.logoState}/>*/}
            </div>
        </header>
    )
}

export default Header;