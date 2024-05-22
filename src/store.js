import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import cartReducer from "./reducers/cartReducer";


const initialState = {}

const reducer = combineReducers({
    CartMainReducer: cartReducer
});

const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    applyMiddleware(...middleware))

export default store