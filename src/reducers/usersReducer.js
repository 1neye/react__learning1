const SET_USERS = 'SET_USERS';
const SET_USER_CURRENTPAGE = 'SET_USER_CURRENTPAGE';

let initState = {
    users: [],
    pageSize: 5,
    totaUsersCount: 101,
    currentPage: 1,
}



const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return  { ...state, users: action.users }
        }
        case SET_USER_CURRENTPAGE: {
            return  { ...state, currentPage: action.currentPage }
        }
        default:
            return state;
    }
}

export const setUsersAC = (users) => ({ type: 'SET_USERS', users })
export const setUserCurrentPageAC = (currentPage) => ({type: 'SET_USER_CURRENTPAGE', currentPage})


export default usersReducer;