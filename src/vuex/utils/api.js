import axios from 'axios';

let apiUrl = '192.168.28';

export default {
  get(url, request) {
    return axios.get(apiUrl + url, request)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
  post(url, request) {
    return axios.post(apiUrl + url, request)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  patch(url, request) {
    return axios.patch(apiUrl + url, request)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  delete(url, request) {
    return axios.delete(apiUrl + url, request)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }
};
