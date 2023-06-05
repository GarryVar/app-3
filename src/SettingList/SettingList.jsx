import React from "react";
import s from "../SettingList/SettingList.module.css";
import SettingItem from "./SettingItem";

const SettingList = (props) => {
    return (
        <ul className={s.list}>
            {props.settingItemProps.map( i => <SettingItem text={i.text} iconPath={i.iconPath}/>)}
        </ul>
    )
}

export default SettingList;