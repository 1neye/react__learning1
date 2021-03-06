import React from 'react';
// import s from './Main.module.css';
import PostMsg from './Post/PostMsg/PostMsg'


const Main = (props) => {
    let newPostElem = React.createRef();

    let defValue = props.newPostText
    

    let onPostChange = () => {
        let text = newPostElem.current.value;
        props.updateNewPostText(text);
    }

    let AdPost = () => {
        let text = newPostElem.current.value;
        props.adPost(text);
        newPostElem.current.value = '';
    }
    let MsgElements = props.postMsg.map( (m) => <PostMsg msg={m.msg} id={m.id} />)
    return (
        <div>
            <div>My Posts</div>
            <div>
            <textarea onChange={onPostChange} ref={newPostElem} value={defValue}></textarea>
            </div>
            <button onClick={AdPost} >Knopka</button>
        <div>
            {MsgElements}
        </div>
        </div>
    );
}

export default Main;