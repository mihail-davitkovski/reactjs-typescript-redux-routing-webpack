import { combineReducers } from 'redux';

import commentsReducers from "./comments/comments.reducers";

const reducers = combineReducers({
    commentsReducers
});

export default reducers;