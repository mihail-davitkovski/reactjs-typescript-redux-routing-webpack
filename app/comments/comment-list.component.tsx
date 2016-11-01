
import * as React from "react";

import {Comment} from "./comment.component";

import { IComment } from "./model/IComment";

import { IComments } from "./model/IComments";

export const CommentList: React.StatelessComponent<IComments> = (props) => {
    let comments = props.comments;
    let commentNodes = comments.map((comment:IComment, index:number) => 
                <Comment author={comment.author} text={comment.text} key={index}>
                    {comment.text}
                </Comment>
        );
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
};

