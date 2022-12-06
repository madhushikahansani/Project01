import { LOAD_CART_ITEMS, ADD_CART_ITEMS, REMOVE_CART_ITEMS } from "../actions/cart.action";

const initialState = {
    cartItems: [],
};

function reducer(state = initialState, action) {
    let newItems = [];
    switch(action.type) {
        case LOAD_CART_ITEMS:
            return state;
        case ADD_CART_ITEMS:
            const items = action.payload;
            newItems = [...state.cartItems, items];
            return {...state,cartItems: newItems};
        case REMOVE_CART_ITEMS:
            const id = action.payload;
            newItems = state.cartItems.filter(x => x.id !== id);
            return {...state, cartItems:newItems};
        default:
            return state;
    }
}
export default reducer;