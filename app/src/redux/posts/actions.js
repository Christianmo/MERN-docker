import { GET_POSTS, ADD_POST } from '@constants/actionNames';
import postServices from 'services/postServices';
import { denormalizePosts } from 'schemas/posts';

const getPostsTarget = 'posts';
const addPostsTarget = 'post';

const postActions = {
  getPosts: (success, failure) => ({
    type: GET_POSTS,
    target: getPostsTarget,
    service: postServices.getPosts(),
    response: resp => denormalizePosts(resp.data),
    initialState: [],
    success,
    failure,
  }),
  addPost: (values, success, failure) => ({
    type: ADD_POST,
    target: addPostsTarget,
    service: postServices.addPost(values),
    response: resp => resp.data,
    success,
    failure,
  }),
};

export default postActions;
