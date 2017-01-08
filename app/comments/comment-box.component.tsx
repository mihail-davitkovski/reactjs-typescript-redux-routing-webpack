
import { connect } from 'react-redux'

import * as React from "react";

import { CommentList } from "./comment-list.component";

import { CommentForm } from "./comment-form.component";

import { IComment } from "./model/IComment";

import * as actionsCreators from "./action-creators/comment-action.creators";

interface CommentBoxProps {
    comments: Array<IComment>,
    onCommentSubmit(comment: IComment): void,
    loadComments(): void
}

const mapStateToProps = (state: {comments:Array<IComment>}) => {
    return { comments: state.comments }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        loadComments: () => {
            dispatch(actionsCreators.getAllComments());
        },
        onCommentSubmit: (comment: IComment) => {
            dispatch(actionsCreators.addComment(comment));
        }
    }
}


//@connect(mapStateToProps, mapDispatchToProps)
class CommentBox extends React.Component<CommentBoxProps, void>
{
    constructor(props: CommentBoxProps) {
        super(props);
    }

    componentDidMount() {
        this.props.loadComments();
    }

    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList comments={this.props.comments} />
                <br /><br />
                <CommentForm onCommentSubmit={this.props.onCommentSubmit} />
                <br /><br /><br />
                <div>
                    <a href="/search"><b>Go to Search page</b></a>
                </div>
            </div>
        );
    }
}

export const CommentBoxReduxMapper = connect(mapStateToProps, mapDispatchToProps)(CommentBox);




