import {IComment} from "../../comments/model/IComment";

import {CommentActionTypes} from "./comment-action.types";

export const addComment = (comment: IComment) =>(
{
    type: CommentActionTypes.ADD_COMMENT,
    data: {
      comment:comment
    }
  }
);

export const  getAllComments = () => (
{
    type: CommentActionTypes.GET_ALL_COMMENTS
});