import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
    return (
        <main>
            <div className={s.content}>
                <div className={s.avatar}></div>
                <div className={s.desc}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa eligendi id iusto laudantium mollitia nemo quisquam quos repellat soluta. Architecto culpa ducimus earum eligendi hic numquam placeat provident quasi.</p>
                </div>
                <div className="myposts"></div>
            </div>
        </main>
    )
}

export default Profile;