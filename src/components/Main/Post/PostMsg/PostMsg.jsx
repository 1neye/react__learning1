import React from 'react';
import s from './PostMsg.module.css';


const PostMsg = (props) => {
    return (
        <div className={s.PostMsg}>
            {props.msg}
        </div>
    );
}

export default PostMsg;