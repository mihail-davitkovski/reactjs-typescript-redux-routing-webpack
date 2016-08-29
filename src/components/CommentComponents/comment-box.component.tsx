
import { connect } from 'react-redux'

import * as React from "react";

import {CommentList} from "./comment-list.component";

import {CommentForm} from "./comment-form.component";

import CommentsStore, {IComment, ICommentState} from "../../stores/CommentsStore";

import CommentActions  from "../../actions/CommentActions";

import { IComments } from "./model/IComments";

const mapStateToProps = (state: IComments) => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    onCommentSubmit: (comment: IComment) => {
      //dispatch(null)
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export const CommentBox: React.StatelessComponent<IComments> = (props) => (
    <div className="commentBox">
                <h1>Comments</h1>
                <CommentList comments={this.props.comments}/>
                <br/><br/>
                <CommentForm  onCommentSubmit={() => handleCommentSubmit()}/>
                <br/><br/><br/>
                <div>
                    <a href="/search"><b>Go to Search page</b></a>
                </div>
            </div>
);

@connect(mapStateToProps, mapDispatchToProps)
export class CommentBox extends React.Component<IComments, void>
{
    constructor(props:IComments)
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


