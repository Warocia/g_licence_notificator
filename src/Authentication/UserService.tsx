import axios from 'axios';
import authHeader from './authHeader';
import JSONDataLicense from '../Interfaces/JSONDataLicense';
import { License } from "../Classes/License";

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
}

export default new UserService();
