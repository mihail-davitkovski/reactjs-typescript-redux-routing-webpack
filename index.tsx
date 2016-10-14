/// <reference path='./typings/index.d.ts'/>

import * as React from "react";

import * as ReactDom from "react-dom";

import  * as ReactRouter  from "react-router";

import { Store, createStore } from 'redux';

import { Provider } from 'react-redux';

import reducers from "./app/app.reducers";

import { CommentBox } from "./app/comments/comment-box.component";
 
 let store = createStore(reducers);

ReactDom.render(
  <Provider store={store}>
    <ReactRouter.Router history={ReactRouter.broserHistory}>
      <ReactRouter.Route path="/" component={CommentBox}>
        <ReactRouter.Route path="search" component={CommentBox}/>
        <ReactRouter.Route path="comments" component={CommentBox}/>
      </ReactRouter.Route>
    </ReactRouter.Router>
  </Provider>,
  document.getElementById('content')
)