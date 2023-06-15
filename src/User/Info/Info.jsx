import React from "react";
import s from "../User.module.css";

const Info = () => {
    return (
        <div className="info">
            <div className={s.avatar}>
                <img src="https://sun9-59.userapi.com/c4441/u19478993/-6/x_656dada1.jpg" alt=""/>
                <p className={s.name}>Игорь Варехов</p>
                <button className={s.addAvatar}>
                    <svg viewBox="0 0 32 32">
                        <use xlinkHref="#add-avatar-icon"></use>
                    </svg>
                </button>
            </div>

            <div className={s.desc}>
                <div className="account"></div>
            </div>
        </div>
    )
}

export default Info;