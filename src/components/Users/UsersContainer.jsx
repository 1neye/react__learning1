import {connect} from "react-redux"
import React from 'react';
import Users from './Users';
import * as axios from 'axios';
import {setUsersAC, setUserCurrentPageAC} from '../../reducers/usersReducer'


class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setUserCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }
    render() {

        return <Users 
        onPageChanged={this.onPageChanged}   
        currentPage={this.props.currentPage} 
        users={this.props.users}
        totaUsersCount={this.props.totaUsersCount}
        pageSize={this.props.pageSize}
        />
    }
}

const mapStateProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totaUsersCount: state.usersPage.totaUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setUserCurrentPage: (currentPage) => {
            dispatch(setUserCurrentPageAC(currentPage));
        }
    }
}


const ConnectMain = connect (mapStateProps, mapDispatchToProps) (UsersContainer)



export default ConnectMain;