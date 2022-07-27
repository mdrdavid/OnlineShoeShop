import {configureStore} from "@reduxjs/toolkit"
    import {combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { productListReducer, productDetailsReducer} from "./Reducers/ProductReducers";
import { cartReducer } from "./Reducers/CartReducers"

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})

const cartItemsFromLocalStorage = localStorage.getItem("cartItem")
? JSON.parse(localStorage.getItem("cartItem"))
: {}
const initialState ={
    cart: {
        cartItems: cartItemsFromLocalStorage
    }
}

const middleware =[thunk]

const store = configureStore(
    {reducer},
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

