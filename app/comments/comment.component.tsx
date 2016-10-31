import * as React from "react";

import {IComment} from "./model/IComment";


export const Comment: React.StatelessComponent<IComment> = (props)=> (
        <div className="comment">
                <h2 className="commentAuthor">
                    {props.author}
                </h2>
                {props.children}
        </div>

);
