import {configureStore} from "@reduxjs/toolkit"
    import {combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { productListReducer } from "./Reducers/ProductReducers";

const reducer = combineReducers({
    productList: productListReducer,
})

const initialState ={}

const middleware =[thunk]

const store = configureStore(
    {reducer},
    initialState,
    composeWithDevTools(applyMiddleware.apply.middleware)
);

export default store;

