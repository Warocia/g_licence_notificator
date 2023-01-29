import axios from 'axios';
import authHeader from './authHeader';

const API_URL = 'https://localhost:7229/';

class UserService {
  getLicenses() {
    return axios.get(API_URL + 'License',{ headers: authHeader()}).then(response => response.data);
  }
}

export default new UserService();
