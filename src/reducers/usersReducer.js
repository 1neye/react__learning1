const SET_USERS = 'SET_USERS';
const SET_USER_CURRENTPAGE = 'SET_USER_CURRENTPAGE';
const IS_FETCHING = 'IS_FETCHING';

let initState = {
    users: [],
    pageSize: 5,
    totaUsersCount: 101,
    currentPage: 1,
    isFetching: false
}



const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return  { ...state, users: action.users }
        }
        case SET_USER_CURRENTPAGE: {
            return  { ...state, currentPage: action.currentPage }
        }
        case IS_FETCHING: {
            return {...state, isFetching: action.fetching}
        }
        default:
            return state;
    }
}

export const setUsers = (users) => ({ type: 'SET_USERS', users })
export const setUserCurrentPage = (currentPage) => ({type: 'SET_USER_CURRENTPAGE', currentPage})
export const toggleIsFetching = (fetching) => ({type: 'IS_FETCHING', fetching})



export default usersReducer;