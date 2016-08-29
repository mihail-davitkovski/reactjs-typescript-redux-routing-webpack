import {IComment} from "./IComment";


export const addComment = (comment: IComment) => {
  return {
    type: 'ADD_TODO',
  }
}