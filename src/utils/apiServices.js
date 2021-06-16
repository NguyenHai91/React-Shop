import { serverURL } from '../constants/config';
import axios from 'axios';



export function callApi(endpoint, method='GET', data) {
  console.log(localStorage);
  const token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  }
  return axios({
    method: method,
    url: `${serverURL}/${endpoint}`,
    data: data
  }).catch(err => {
    
  });
};
