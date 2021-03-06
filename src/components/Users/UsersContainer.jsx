import {connect} from "react-redux"
import React from 'react';
import Users from './Users';
import {setUsersAC} from '../../reducers/usersReducer'



const mapStateProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}


const ConnectMain = connect (mapStateProps, mapDispatchToProps) (Users)



export default ConnectMain;