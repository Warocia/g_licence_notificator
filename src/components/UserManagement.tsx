import React, {useState, useRef, useEffect, Component} from 'react';

import styles from "./LicencePage"

import { License } from "../Classes/License";
import LicenceList from '../Functions/LicenceList';
import { v4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import UserService from '../Authentication/UserService';
import { Console } from 'console';
import JSONDataLicense from '../Interfaces/JSONDataLicense';

interface Props {  
}


interface State {
 
}

export default class UserManagement extends Component<Props, State> {

  render() {
    return (
      <div>
        <p>Käyttäjien hallinta</p>
      </div>
    );
  }
}
