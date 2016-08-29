import { connect } from 'react-redux'
import { IComment } from "./model/IComment";
import { IComments } from "./model/IComments";
import { CommentBox } from "./comment-box.component";

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCommentSubmit: (comment: IComment):void => {
      //dispatch(null)
    }
  }
}
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentBox as any)