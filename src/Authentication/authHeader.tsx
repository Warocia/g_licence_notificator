export default function authHeader() {
    const tokenAPI = localStorage.getItem("tokenAPI");

    if (tokenAPI) {
      return { Authorization: 'Bearer ' + tokenAPI};
    } else {
      return { Authorization: '' };
    }
  }
  