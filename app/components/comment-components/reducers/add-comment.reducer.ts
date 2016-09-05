const initialCommentState = {
    comments: Array<IComment>,

}

function comments(state = initialCommentState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}