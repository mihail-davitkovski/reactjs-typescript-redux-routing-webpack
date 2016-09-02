
import * as React from "react";

import {Comment} from "./Comment";

import {ICommentState} from "../../stores/CommentsStore";

/*const Counter: React.StatelessComponent<CounterProps> = ({count, onClick}) => (
    <div>
        <h1>Counter below</h1>
        <p onClick={onClick}>{count}</p>
    </div>
);*/

export class CommentList extends React.Component<ICommentState,{}>
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
}
