import { IComment } from "../../comments/model/IComment";

import { CommentActionTypes } from "./comment-action.types";

import fetch = require('isomorphic-fetch');

export const addComment = (comment: IComment) => (
  {
    type: CommentActionTypes.ADD_COMMENT,
    data: {
      comment: comment
    }
  }
)

const requestCommentsStarted = () => (
  {
    type: CommentActionTypes.REQUEST_COMMENTS_STARTED
  }
)

const receiveCommentsFinsished = (comments: Array<IComment>) => (
  {
    type: CommentActionTypes.RECEIVE_COMMENTS_FINISHED,
    data: {
      comments: comments
    }
  }
)

export const getAllComments = () => {
  return (dispatch: any) => {
    return fetch("http://localhost:3000/comments.json")
      .then(response => response.json())
      .then(result => dispatch(receiveCommentsFinsished(result.comments)))
  }
}