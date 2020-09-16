import { GET_USERS } from 'constants/actionNames';

const initialState = {
  usersData: [],
  usersLoading: false,
  usersError: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default userReducer;
