import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./product-reducer";

export const reducers = combineReducers({
    allProducts: productReducer
})