import axios from 'axios';
import authHeader from './authHeader';
import JSONDataLicense from '../Interfaces/JSONDataLicense';
import { License } from "../Classes/License";
import { LicenceUser } from "../Classes/LicenceUser";

const API_URL = 'https://localhost:7229/';

class UserService {
  getLicenses(): Promise<License[]> {
    return axios
      .get(API_URL + 'License', { headers: authHeader() })
      .then((response) => {
        const restAPILicenses: License[] = response.data.map((data: JSONDataLicense) => {
          return new License(data.id, new Date(data.isValidUtc), data.licenseNumber);
        });
        return restAPILicenses;
      })
      .catch((error) => {
        console.error(error);
        return [];
      });
  }
  
  postLicenses(data : Array<License>) {

    const jsonData = data
        .map((license: License) => {
          if (license.ValidDate) 
          {
            const tempJSONDataLicense: JSONDataLicense = {
              id: license.id,
              licenseNumber: license.LicenseNumber,
              isValidUtc: license.ValidDate.toISOString(),
              notificationSent: false,
            };

            return tempJSONDataLicense;
          } 
          else {
            return;
          }
        })
      .filter((license) => license !== undefined) as JSONDataLicense[];


      return new Promise((resolve, reject) => {
        axios
          .post(API_URL + 'License', jsonData, { headers: authHeader() })
          .then((res) => resolve(res))
          .catch((err) => {
            console.error(err.message);
            reject(err);
          });
      });
  }

  getUsers(): Promise<LicenceUser[]> {
    return axios
      .get(API_URL + 'LicenceUser', { headers: authHeader() })
      .then((response) => {
        const users: LicenceUser[] = response.data.map((user: LicenceUser) => {
          return user;
        });
        return users;
      })
      .catch((error) => {
        console.error(error);
        return [];
      });
  }

  createUser(newUser : LicenceUser) : Promise<LicenceUser> {
      return new Promise((resolve, reject) => {
        axios
          .post(API_URL + 'LicenceUser', newUser, { headers: authHeader() })
          .then((res) => resolve(res.data))
          .catch((err) => {
            console.error(err.message);
            reject(err);
          });
      });
  }

  updateUser(updateUser : LicenceUser) : Promise<LicenceUser> {
    return new Promise((resolve, reject) => {
      axios
        .put(API_URL + 'LicenceUser', updateUser, { headers: authHeader() })
        .then((res) => resolve(res.data))
        .catch((err) => {
          console.error(err.message);
          reject(err);
        });
    });
  }

  deleteUser(id: number) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${API_URL}LicenceUser?id=${id}`, { headers: authHeader() })
        .then((res) => resolve(res))
        .catch((err) => {
          console.error(err.message);
          reject(err);
        });
    });
  }

}

export default new UserService();
