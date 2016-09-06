import {IComment} from "../../../../app/components/comment-components/model/IComment";

import {CommentActionTypes} from "./comment-action.types";

const addComment = (comment: IComment) =>(
  {
    type: CommentActionTypes.ADD_COMMENT,
    data: {
      comment:comment
    }
  }
)

const  getAllComments = () => (
  {
    type: CommentActionTypes.GET_ALL_COMMENTS,
  }
)