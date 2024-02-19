import {axiosInstance} from "./axiosInstance";
import {urls} from "../constants/urls";

const postApiService = {
    getAllPosts: () => axiosInstance(urls.posts.base),
    getPostById: (id) => axiosInstance(urls.posts.byId(id))
};

export {postApiService};