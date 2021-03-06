import React from 'react';
import {actionTypeUpdateValueCreater, actionTypeAdPostCreator} from '../../reducers/profileReducer'
import Main from './Main'
import {connect} from "react-redux"


// const MainContainer = (props) => {
//     let onPostChangeAction = (text) => {
//         props.dispatch(actionTypeUpdateValueCreater(text))
//     }

//     let AdPostAction = (text) => {
//         props.dispatch(actionTypeAdPostCreator(text));
//     }
//     return (
//         <Main state={props.state} updateValue={onPostChangeAction} adPost={AdPostAction}/>
//     );
// }

const mapStateProps = (state) => {
    return {
        postMsg: state.profilePage.msg,
        newPostText: state.profilePage.msgValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = actionTypeUpdateValueCreater(text)
            dispatch(action)
        },
        adPost : (text) => {
            dispatch(actionTypeAdPostCreator(text));
        }
    }
}

const ConnectMain = connect (mapStateProps, mapDispatchToProps) (Main)

export default ConnectMain;