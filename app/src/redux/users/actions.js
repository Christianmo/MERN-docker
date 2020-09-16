import { GET_USERS } from 'constants/actionNames';
import userServices from 'services/userServices';
import { denormalizeUsers } from 'schemas/users';

const usersTarget = 'users';

const userActions = {
  getUsers: (success, failure) => ({
    type: GET_USERS,
    target: usersTarget,
    service: userServices.getUsers(),
    response: resp => denormalizeUsers(resp.data),
    initialState: [],
    success,
    failure,
  }),
};

export default userActions;
