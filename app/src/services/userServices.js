import api from '@config/api';

const userService = {
  getUsers: () => api.get('/users'),
};

export default userService;
