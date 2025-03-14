import { ProductsType, selectedProductAction, setProductsAction } from "../actions/product-actions";
import { ActionTypes } from "../constants/action-types";

type Action = setProductsAction | selectedProductAction

const initialState: ProductsType = {
    products: [
        {
            id: 1,
            title: "Dipesh",
            category: "programmer",
            description: "Dipesh description"
        }
    ]
}

export const productReducer = (state: ProductsType = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        default:
            return state;
    }
}