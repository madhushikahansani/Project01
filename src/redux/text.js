//----------STORE--------------------------------
// import { createStore, combineReducers } from "redux";
import { combineReducers } from 'redux';
import cartReducer from './reduces/cart.reducer';
import userReducer from './reduces/user.reducer';

// const rootReducer = combineReducers({
//     user : userReducer,
//     cart : cartReducer 
// });
// const store = createStore(rootReducer);


// const store = createStore(reducer);

// export default store;


//------ACTION ----------------------------------------------------
// export const MODIFY_CART = 'MODIFY_CART';
// export const UPDATE_CART = 'UPDATE_CART';


//-----------REDUCER---------------------------------------
// import {MODIFY_CART,UPDATE_CART} from './actions/cart.action';

// const initialState = {};

// function reducer (state = initialState,action){
//     switch(action.type){
//         case MODIFY_CART:
//             return state;
//         case UPDATE_CART:
//             return state;

//     }
// }
// export default reducer;