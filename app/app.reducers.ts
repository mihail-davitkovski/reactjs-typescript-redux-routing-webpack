import { combineReducers } from 'redux';

import commentsReducers from "./comments/comments.reducers";

const reducers = combineReducers({
    comments: commentsReducers
});

export default reducers;