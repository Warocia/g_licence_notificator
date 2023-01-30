import axios from 'axios';
import authHeader from './authHeader';
import JSONDataLicense from '../Interfaces/JSONDataLicense';
import { License } from "../Classes/License";

const API_URL = 'https://localhost:7229/';

class UserService {
  getLicenses() {
    return axios.get(API_URL + 'License',{ headers: authHeader()}).then(response => response.data);
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


    return axios.post(API_URL + 'License', jsonData, { headers: authHeader()});
  }
}

export default new UserService();
