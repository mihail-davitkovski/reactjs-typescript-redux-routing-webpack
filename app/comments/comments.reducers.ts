
import { IComment } from "../comments/model/IComment";

import { CommentActionTypes } from "../comments/action-creators/comment-action.types";

import objectAssign = require('object-assign');

const comments = Array<IComment>();

const commentsReducers = (state = comments, action: any) => {
  switch (action.type) {
    case CommentActionTypes.RECEIVE_COMMENTS_FINISHED:
      let allComments = objectAssign([], state,
        action.data.comments
      )
      return allComments;
    case CommentActionTypes.ADD_COMMENT:
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