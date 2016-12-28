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
    return fetch("http://localhost:8080/comments.json")
      .then((result) => {
        console.log(result);
        dispatch(receiveCommentsFinsished([{text:"text", author:"aurthor"}]))
      });
  }
}