
import { connect } from 'react-redux'

import * as React from "react";

import {CommentList} from "./comment-list.component";

import {CommentForm} from "./comment-form.component";

import {IComment} from "./model/IComment";

import * as actionsCreators  from "./action-creators/comment-action.creators";

import { IComments } from "./model/IComments";

interface CommentBoxProps
{
    comments: Array<IComment>,
    onCommentSubmit: any
}

const mapStateToProps = (state: IComments) => ({comments: state.comments});
  
const mapDispatchToProps = (dispatch: any) => ({
    onCommentSubmit: (comment: IComment) => {
      dispatch(actionsCreators.addComment(comment));
    }
 });


//@connect(mapStateToProps, mapDispatchToProps)
class CommentBox extends React.Component<CommentBoxProps, {}>
{
    constructor(props: CommentBoxProps)
    {
        super(props);
    }
    
    render()
    {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList comments={this.props.comments}/>
                <br/><br/>
                <CommentForm  onCommentSubmit={() => this.props.onCommentSubmit}/>
                <br/><br/><br/>
                <div>
                    <a href="/search"><b>Go to Search page</b></a>
                </div>
            </div>
        );
    }
}

export const CommentBoxReduxMapper = connect(mapStateToProps, mapDispatchToProps)(CommentBox);




