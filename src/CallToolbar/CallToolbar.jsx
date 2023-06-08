import React from "react";
import s from "./CallToolbar.module.css";

const CallToolbar = () => {
    return (
        <div className={s.layout}>
            <div className={s.call}></div>
            <div className={s.video}></div>
        </div>
    )
}

export default CallToolbar;