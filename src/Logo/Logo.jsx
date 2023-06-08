import React from "react";
import s from "./Logo.module.css";

const Logo = (props) => {
    return (
        <div className={s.logo}>
            <a href="">
                <svg width={props.logoState.width} height={props.logoState.height}>
                    <use xlinkHref={props.logoState.logoPath}></use>
                </svg>
            </a>
        </div>
    )
}

export default Logo;