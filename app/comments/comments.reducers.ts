import {IComment} from "../comments/model/IComment";

import {CommentActionTypes} from "../comments/action-creators/comment-action.types";

const initialCommentState = {
    comments: Array<IComment>()
};

const commentsReducers = (state = initialCommentState, action:any) => {
  switch (action.type) {
    case CommentActionTypes.ADD_COMMENT:
      return Object.assign({}, state, {
        comments: action.data
      })
    default:
      return state
  }
}

export default commentsReducers;