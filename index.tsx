/// <reference path='./typings/index.d.ts'/>

import * as React from "react";

import * as ReactDom from "react-dom";

import  * as ReactRouter  from "react-router";

import { Store, createStore } from 'redux';

import { Provider } from 'react-redux';

import { CommentBox } from "./src/components/CommentComponents/comment-box.component";
 
 let store = createStore();

//import { FilterableProductTable } from "./src/Components/SearchComponents/FilterableProductTable";

/*ReactDom.render((
  <ReactRouter.Router history={ReactRouter.browserHistory}>
    <ReactRouter.Route path="/" component={CommentBox}/>
    <ReactRouter.Route path="search" component={FilterableProductTable}/>
    <ReactRouter.Route path="comments" component={CommentBox}/>
  </ReactRouter.Router>
), document.getElementById('content'))*/

ReactDom.render(
  <Provider store={store}>
    <ReactRouter.Router history={history}>
      <ReactRouter.Route path="/" component={CommentBox}>
        <ReactRouter.Route path="search" component={CommentBox}/>
        <ReactRouter.Route path="comments" component={CommentBox}/>
      </ReactRouter.Route>
    </ReactRouter.Router>
  </Provider>,
  document.getElementById('content')
)