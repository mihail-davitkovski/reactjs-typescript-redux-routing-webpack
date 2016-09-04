
import * as React from "react";

import {Comment} from "./comment.component";

import { IComment } from "./model/IComment";

import { IComments } from "./model/IComments";

export const CommentList: React.StatelessComponent<IComments> = (props) => {

    let commentNodes = this.props.comments.map((comment:IComment)=> {
        (
                <Comment author={comment.author} text={comment.text}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
};

/*export class CommentList extends React.Component<ICommentState,{}>
{
    render()
    {
        let commentNodes = this.props.comments.map(function(comment) {
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });
        return(
            <div className="commentList">
               {commentNodes}
            </div>
        );
    }
}*/
