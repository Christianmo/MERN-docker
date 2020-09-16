import { GET_POSTS, ADD_POST } from 'constants/actionNames';

const initialState = {
  postsData: [],
  postsLoading: false,
  postsError: false,
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return { ...state, ...payload };
    case ADD_POST:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default postReducer;
