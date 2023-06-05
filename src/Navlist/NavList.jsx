import React from "react";
import s from "./NavList.module.css";
import NavItem from "./NavItem";



const NavList = (props) => {
    return (
        <ul className={s.list}>
            {props.navItemProps.map( i => <NavItem
                    key={i.iconPath.length * 5}
                    text={i.text}
                    iconPath={i.iconPath}/>)}
        </ul>
    )
}

export default NavList;