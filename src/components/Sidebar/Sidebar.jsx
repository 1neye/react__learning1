import React from 'react';
import s from './Sidebar.module.css'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <NavLink to='/Main'>Главная</NavLink>
            <NavLink to='/Dialogs'>Диалоги</NavLink>
            <NavLink to='/Users'>Пользователи</NavLink>

        </div>
    )
}

export default Sidebar;