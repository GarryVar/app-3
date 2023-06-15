import React from "react";
import s from "./Profile.module.css";
import User from "../User/User";

const Profile = () => {
    return (
        <main>
            <div className={s.content}>
                <div className={`${s.title} visually-hidden`}>
                    <h1>user profile</h1>
                </div>
                <div className="myposts"></div>
            </div>
        </main>
    )
}

export default Profile;