import { connect } from "react-redux"
import React from 'react';
import Users from './Users';
import * as axios from 'axios';
import { setUsers, setUserCurrentPage, toggleIsFetching } from '../../reducers/usersReducer'
import Preloader from '../Preloader/Preloader'


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setUserCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        });
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                totaUsersCount={this.props.totaUsersCount}
                pageSize={this.props.pageSize}
            />
        </>
    }
}

const mapStateProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totaUsersCount: state.usersPage.totaUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setUserCurrentPage: (currentPage) => {
//             dispatch(setUserCurrentPageAC(currentPage));
//         },
//         toggleIfFetching: (fetching) => {
//             dispatch(toggleIsFetchingAC(fetching));
//         }

//     }
// }


const ConnectMain = connect(mapStateProps, {
    setUsers,
    setUserCurrentPage,
    toggleIsFetching,
}
    
    )(UsersContainer)



export default ConnectMain;