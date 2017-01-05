import { Product } from "../model/product";

import { SearchProductActionType } from "./search-product-action.types";

import fetch = require('isomorphic-fetch');

export const filterChange = (searchValue: string, inStockOnly: boolean) => (
    {
        type: SearchProductActionType.FILTER_CHANGED,
        data: {
            searchValue: searchValue,
            inStockOnly: inStockOnly
        }
    }
)

const requestProductsStarted = () => (
  {
    type: SearchProductActionType.REQUEST_PRODUCTS_STARTED
  }
)

const receiveProductsFinsished = (products: Array<Product>) => (
  {
    type: SearchProductActionType.RECEIVE_PRODUCTS_FINISHED,
    data: {
      products: products
    }
  }
)

export const getAllProducts = () => {
  return (dispatch: any) => {
    return fetch("http://localhost:8080/products.json")
      .then(response => response.json())
      .then(result => dispatch(receiveProductsFinsished(result.products)))
  }
}

