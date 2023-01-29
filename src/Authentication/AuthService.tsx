import axios from "axios";

const API_URL = "https://localhost:7229/";

class AuthService {
  login(username: string, password: string) {
    return axios
      .post(API_URL + "security/createToken", {
        username,
        password
      })
      .then(response => {
        if (response.data) {
          localStorage.setItem("tokenAPI", response.data);
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("tokenAPI");
  }

  getCurrentToken() {
    const userStr = localStorage.getItem("tokenAPI");
    if (userStr) return userStr;

    return null;
  }
}

export default new AuthService();
