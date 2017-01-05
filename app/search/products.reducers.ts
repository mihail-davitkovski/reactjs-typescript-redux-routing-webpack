import { Product } from "./model/product";

import { SearchProductActionType } from "./action-creators/search-product-action.types";

import objectAssign = require('object-assign');

const products = Array<Product>();

const commentsReducers = (state = products, action: {type:SearchProductActionType, data:any}) => {
  switch (action.type) {
    case SearchProductActionType.RECEIVE_PRODUCTS_FINISHED:
      let allProducts = objectAssign([], state,
        action.data.products
      )
      return allProducts;
    case SearchProductActionType.FILTER_CHANGED:
      let newState = objectAssign([], state,
        [
          ...state,
          action.data.comment
        ]
      )
      return newState;
    default:
      return state
  }


}

export default commentsReducers;