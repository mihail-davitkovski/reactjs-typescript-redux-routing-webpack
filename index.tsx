
import * as React from "react";

import * as ReactDom from "react-dom";

import  {Router, Route, browserHistory } from "react-router";

import { Store, createStore, applyMiddleware  } from 'redux';

import { Provider } from 'react-redux';

import thunkMiddleware from "redux-thunk";

import reducers from "./app/app.reducers";

import { CommentBoxReduxMapper } from "./app/comments/comment-box.component";

import { FilterableProductTableBoxReduxMapper } from "./app/search-products/filterable-product-table-box.component";
 
let store = createStore(reducers, applyMiddleware(
  thunkMiddleware
));

ReactDom.render(  
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={CommentBoxReduxMapper}/>
      <Route path="search" component={FilterableProductTableBoxReduxMapper}/>
      <Route path="comments" component={CommentBoxReduxMapper}/>
    </Router>
  </Provider>,
  document.getElementById('content')
)