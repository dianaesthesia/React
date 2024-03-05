import {useForm} from "react-hook-form";

import {commentApiService} from "../../services/comment.api.service";

const CommentForm = ({setComments}) => {
    const {register, handleSubmit} = useForm();

    const postComment = (item) => {
        commentApiService.create(item).then(({data}) => setComments(prev => ([...prev, data])))
    };

    return (
        <div>
            <form onSubmit={handleSubmit(postComment)}>
                <input type={'text'} placeholder={'name'} {...register('name')}/>
                <input type={'email'} placeholder={'email'} {...register('email')}/>
                <input type={'text'} placeholder={'body'} {...register('body')}/>
                <button>Post</button>
            </form>
        </div>
    );
};

export {CommentForm};