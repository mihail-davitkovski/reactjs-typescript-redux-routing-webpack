
import {IComment} from "../comments/model/IComment";

import {CommentActionTypes} from "../comments/action-creators/comment-action.types";

import objectAssign = require('object-assign');

const comments = Array<IComment>();

const commentsReducers = (state = comments, action:any) => {
  switch (action.type) {
    case CommentActionTypes.ADD_COMMENT:
      console.log(action.data.comment);
      return objectAssign({}, state, 
          [
            ...state,
            action.data.comment
          ]
    )
    default:
      return state
  }

  
}

export default commentsReducers;