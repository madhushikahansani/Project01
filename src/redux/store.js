import { combineReducers, createStore } from 'redux';
import cartReducer from './reduces/cart.reducer';
import userReducer from './reduces/user.reducer';
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});
const localStorageData = localStorage.getItem('redux_data');
let initialState = JSON.parse(localStorageData);
if(!initialState){
    initialState = {};
}
const store = createStore(rootReducer,initialState);
store.subscribe(() => {
    const storeData = JSON.stringify(store.getState());
    localStorage.setItem('redux_data',storeData);
})
export default store;