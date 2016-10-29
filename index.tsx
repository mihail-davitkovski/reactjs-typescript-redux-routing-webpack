/// <reference path='./typings/index.d.ts'/>

import * as React from "react";

import * as ReactDom from "react-dom";

import  {Router, Route, browserHistory } from "react-router";

import { Store, createStore } from 'redux';

import { Provider } from 'react-redux';

import reducers from "./app/app.reducers";

import { CommentBoxReduxMapper } from "./app/comments/comment-box.component";
 
let store = createStore(reducers);

ReactDom.render(  
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={CommentBoxReduxMapper}>
        <Route path="search" component={CommentBoxReduxMapper}/>
        <Route path="comments" component={CommentBoxReduxMapper}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('content')
)