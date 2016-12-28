import {IComment} from "../../comments/model/IComment";

import {CommentActionTypes} from "./comment-action.types";

import fetch = require('isomorphic-fetch');

export const addComment = (comment: IComment) =>(
  {
    type: CommentActionTypes.ADD_COMMENT,
    data: {
      comment:comment
    }
  }
)

export const allCommentsReceived = (comments: Array<IComment>) =>(
  {
    type: CommentActionTypes.ADD_COMMENT,
    data: {
      comments:comments
    }
  }
)


export const getAllComments = () => {
    return  (dispatch: any)=>{
        return fetch("http://localhost:8080/comments.json")
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(allCommentsReceived(null))
      );
    }
}

/*{
    type: CommentActionTypes.GET_ALL_COMMENTS
});*/
