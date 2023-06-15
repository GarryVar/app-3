import React from "react";
import Info from "./Info/Info";
import s from "./User.module.css";

const User = () => {
    return (
        <div className={s.wrapper}>
            <Info />
            <div className="options">
                <div className="settings"></div>
                <div className="help"></div>
            </div>
        </div>
    )
}

export default User;