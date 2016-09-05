import {IComment} from "../../../../app/components/comment-components/model/IComment";

import {CommentActionTypes} from "../action-creators/comment-action.types";

const initialCommentState = {
    comments: Array<IComment>()
};

const  commentsReducers = (state = initialCommentState, action:CommentActionTypes) => {
  switch (action.type) {
    case CommentActionTypes.ADD_COMMENT:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}