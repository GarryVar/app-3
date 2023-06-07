import React from "react";
import s from "./SearchForm.module.css";

const SearchForm = () => {
    return (
        <form className={s.form} action="">
            <input className={s.input} type="text"/>
            <button type="submit">
                <svg width="20" height="20">
                    <use xlinkHref="#search-icon"></use>
                </svg>
            </button>
        </form>
    )
}

export default SearchForm;