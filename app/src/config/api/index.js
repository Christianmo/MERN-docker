import { create } from 'apisauce';
import { toast } from 'react-toastify';

const api = create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { accessToken: '' },
});

const monitor = (response) => {
  toast(`Status: ${response.status}`);
};

api.addMonitor(monitor);

export default api;
