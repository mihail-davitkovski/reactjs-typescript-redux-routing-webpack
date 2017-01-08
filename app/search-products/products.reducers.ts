import { Product, FilterableProducts } from "./model/product";

import { SearchProductActionType } from "./action-creators/search-product-action.types";

import objectAssign = require('object-assign');

const filterableProducts = 
{
  filterText: "",
  inStockOnly: false,
  products: Array<Product>()
}

Array<Product>();

const productsReducers = (state = filterableProducts, action: {type:SearchProductActionType, data:any}) => {

  switch (action.type) {
    case SearchProductActionType.RECEIVE_PRODUCTS_FINISHED:
      let receivedProductFinishedState = objectAssign({}, state,
        {
          products: action.data.products
        }
      )
      return receivedProductFinishedState;
    case SearchProductActionType.FILTER_CHANGED:
      let products = objectAssign([], state.products);
      let filteredProducts:Array<Product> = Array<Product>();
      products.forEach((product)=> {
            if (product.name.indexOf(action.data.searchValue) === -1 || (!product.stocked && action.data.inStockOnly)) {
                return;
            }
            else
            {
                filteredProducts.push(product);
            }
        });
        let filteredState:FilterableProducts = objectAssign({}, state,
        {
          filterText: action.data.searchValue,
          inStockOnly:action.data.inStockOnly 
        }
      )
      filteredState.products = filteredProducts;
      return filteredState;
    default:
      return state
  }


}

export default productsReducers;