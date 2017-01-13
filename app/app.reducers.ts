import { combineReducers } from 'redux';

import commentsReducers from "./comments/comments.reducers";

import productsReducers from "./search-products/products.reducers";

const reducers = combineReducers({
    comments: commentsReducers,
    filterableProducts: productsReducers
});

export default reducers;