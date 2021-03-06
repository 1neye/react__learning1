import {combineReducers, createStore} from "redux";
import profileReducer from '../reducers/profileReducer';
import usersReducer from '../reducers/usersReducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
})

let store = createStore(reducers);

export default store;