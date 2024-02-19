import {useEffect, useState} from "react";
import {axiosInstance} from "../../services/axiosInstance";
import {urls} from "../../constants/urls";
import {postApiService} from "../../services/post.api.service";
import {PostComponent} from "../post/PostComponent";
import {post} from "axios";
import {PostDetailsComponent} from "../post-details/PostDetailsComponent";
import css from "./PostsComponent.module.css";

const PostsComponent = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        postApiService.getAllPosts().then(value => setPosts(value.data));
    }, []);

    const getCurrentPost = (post) => {
        setPostDetails(post);
    }

    return (
        <div className={css.Posts}>
            <div>
                {
                    posts.map(post => (
                        <PostComponent post={post} key={post.id} getCurrentPost={getCurrentPost}/>
                    ))
                }
            </div>
            <hr/>
            {postDetails && <PostDetailsComponent postDetails={postDetails}/>}
        </div>
    );
};

export {PostsComponent};