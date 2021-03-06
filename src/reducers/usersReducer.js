const SET_USERS = 'SET_USERS';

let initState = {
    users: [
        //     {id: 1, status: 'Vasya Pupkin', location: 'Kiev', follow: false},
        // {id: 2, status: 'Ksenia Hrekova', location: 'Dnepr', follow: false},
        //     {id: 3, status: 'Andrew Makkonahi', location: 'Minsk', follow: false},
    ],
}



const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state;
    }
}

export const setUsersAC = (users) => ({ type: 'SET_USERS', users })


export default usersReducer;