import profileReducer from './profileReducer'

let store = {
    _state: {
        msg: [{ msg: 'First msg', id: 1 }, { msg: '2 msg', id: 2 }],
        msgValue: ['Value'],
    },
    getState() {
        return this._state;
    },
    renderTree() {
        console.log('Dom is rendered')
    },
    subscribe(observer) {
        this.renderTree = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state, action)
        this.renderTree(this._state);
    }
}

export default store;



window.store = store;

