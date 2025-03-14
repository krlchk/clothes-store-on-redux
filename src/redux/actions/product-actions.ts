import { ActionTypes } from "../constants/action-types"

export type ProductsType = {
    products: UnitProductType[];
}

type UnitProductType = {
    id: number;
    title: string;
    category: string
    description: string;
}

export type setProductsAction = {
    type: 'SET_PRODUCTS',
    payload: UnitProductType[];
}

export type selectedProductAction = {
    type: 'SELECTED_PRODUCTS',
    payload: UnitProductType
}

//types

export const setProducts = (products: UnitProductType[]) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product: UnitProductType) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product
    }
}