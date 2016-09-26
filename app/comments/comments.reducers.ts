import {IComment} from "../comments/model/IComment";

import {CommentActionTypes} from "../comments/action-creators/comment-action.types";

const initialCommentState = {
    comments: Array<IComment>()
};

const commentsReducers = (state = initialCommentState, action:CommentActionTypes) => {
  switch (action.type) {
    case CommentActionTypes.ADD_COMMENT:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}

export default commentsReducers;