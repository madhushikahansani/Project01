import { UPDATE_USER, LOAD_USER } from '../actions/user.action';

const initialState = {
    email: "hansi123@gmail.com",
    name: "Hansi",
    id:""
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_USER:
            return state;
        case LOAD_USER:
            return state;
        default:
            return state;
    }
}
export default reducer;