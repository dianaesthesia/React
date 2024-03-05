import {useEffect, useState} from "react";

import {commentApiService} from "../../services/comment.api.service";
import {CommentForm} from "./CommentForm";
import {Comments} from "./Comments";

const CommentsContainer = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentApiService.getAll().then(({data}) => setComments(data))
    }, []);

    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};