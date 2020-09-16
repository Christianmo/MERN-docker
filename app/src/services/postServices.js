import api from '@config/api';

const postService = {
  getPosts: () => api.get('/posts'),
  addPost: values => api.post('/posts', values),
};

export default postService;
