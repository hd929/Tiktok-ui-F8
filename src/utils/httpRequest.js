import axios from 'axios';
import { REACT_APP_BASE_URL } from '~/config/environment';

const request = axios.create({
  baseURL: REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
};

export const post = async (path, data = {}) => {
  const response = await request.post(path, data);
  return response;
};

export const put = async (path, data = {}) => {
  const response = await request.put(path, data);
  return response;
};

export default request;
