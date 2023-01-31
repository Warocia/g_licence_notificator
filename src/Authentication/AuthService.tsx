import axios from "axios";
import JSONUser from '../Interfaces/JSONUser';

const API_URL = "https://localhost:7229/";
const USER_KEY = 'auth-user';

class AuthService {
  login(username: string, password: string) {
    return axios
      .post(API_URL + "security/createToken", {
        username,
        password
      })
      .then(response => {
        if (response.data) {

          localStorage.removeItem(USER_KEY);
          localStorage.setItem(USER_KEY, JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("USER_KEY");
  }

  getCurrentUser()  {
    const storedData = localStorage.getItem(USER_KEY);

    if (storedData){
      const user: JSONUser = JSON.parse(storedData);
      return user;
    }

    return null;
  }
}

export default new AuthService();
