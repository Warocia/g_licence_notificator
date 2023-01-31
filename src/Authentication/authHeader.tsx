import JSONUser from '../Interfaces/JSONUser';

const USER_KEY = 'auth-user';

export default function authHeader() {
  const storedData = localStorage.getItem(USER_KEY);
  if (storedData){
    const user: JSONUser = JSON.parse(storedData);
    return { Authorization: 'Bearer ' + user.JwtToken};
  }
  else{
    return { Authorization: '' };
  }
  }
  