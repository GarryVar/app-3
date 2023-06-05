import React from "react";
import s from "../Navlist/NavList.module.css";

const SettingItem = (props) => {
    return (
        <li className={s.item}>
            <a className={s.link} href="">
                <svg width="20" height="20">
                    <use xlinkHref={props.iconPath}></use>
                </svg>
                <span>{props.text}</span>
            </a>
        </li>
    )
}

export default SettingItem;
