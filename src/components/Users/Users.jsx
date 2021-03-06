import React from 'react'
import s from './Users.module.css';
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = props.totaUsersCount / props.pageSize;

        let pages = []
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i);
        }

    return <div>
        <div>
            {pages.map((p) => {
                return <span className={props.currentPage === p && s.active} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
        {
            props.users.map((m) => <div key={m.id}>
                <span>
                    <NavLink to={'/Main/' + m.id}>
                    <div>{m.name}</div>
                    </NavLink>
                    <div>{"m.location"}</div>
                    <button>Follow</button>
                </span>
            </div>)
        }
    </div>

}
export default Users;