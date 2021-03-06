const adpost = 'adPost';
const updateValue = 'updateValue';

export const actionTypeUpdateValueCreater = () => {
    return { type: 'updateValue' }
}

export const actionTypeAdPostCreator = (text) => {
    return { type: 'adPost', data: text }
}

let initState = {
    msg: [{ msg: 'First msg', id: 3 }, 
    { msg: '2 msg', id: 2 }],
    msgValue: ['Value'],
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case adpost:
            let newPost = {
                msg: action.data
            }
            let stateCopy = {...state};
            stateCopy.msg = [...state.msg];
            stateCopy.msg.push(newPost)
        return stateCopy;
        case updateValue:
            let stateCopi = {...state}
            stateCopi.msgValue = action.txt;
            return stateCopi;
        default:
            return state;
    }
}

export default profileReducer;