import React, {useState, useRef, useEffect, Component} from 'react';

import styles from "./LicencePage"

import { License } from "../Classes/License";
import LicenceList from '../Functions/LicenceList';
import { v4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import UserService from '../Authentication/UserService';
import { Console } from 'console';

interface Props {  
}

interface JSONData {
  id: string;
  licenseNumber: string;
  isValidUtc: string;
  notificationSent: boolean;
}

interface State {
    licences: Array<License>;
    setLicences: (newLicences: Array<License>) => void;
}

export default class LicencePage extends Component<Props, State> {
  
  readonly licenceNumberRef = React.createRef<HTMLInputElement>();

  constructor(props : Props) {
    super(props);
    this.handleAddNewLicence = this.handleAddNewLicence.bind(this);
    this.handleRemoveLicence = this.handleRemoveLicence.bind(this);
    this.updateLicenseDate = this.updateLicenseDate.bind(this);

    this.state = {
       licences: [],
       setLicences: (newLicences: Array<License>) => {
           this.setState({licences: newLicences});
        }
    }
  }

  componentDidMount() {
    UserService.getLicenses().then(
      response => {

        const restAPILicenses: License[] = response.map((data : JSONData) => {
          return new License(data.id, new Date(data.isValidUtc), data.licenseNumber);
        });

        this.setState(prevState => {
          return {licences: restAPILicenses};
        });
        
      },
      error => {
        console.log(error);
      }
    );
  }

  handleAddNewLicence(): void {

    if (!this.licenceNumberRef.current) {
      return;
    }
    
    const name = this.licenceNumberRef.current.value;

    if(name === '') return;

    const myLicense = new License(v4(), null, name);
    
    this.setState(prevState => {
      return {licences: [...prevState.licences, myLicense]};
    });
    
    this.licenceNumberRef.current.value = "";
  }

  handleRemoveLicence(removeThisId : string): void {
    const currentLicences = [...this.state.licences];

    const updatedLicences = currentLicences.filter((item) => {
      return item.id !== removeThisId;
    });
   
    this.setState(prevState => {
      return {licences: updatedLicences};
    });
  }

  updateLicenseDate(id : string, newDate : Date | null): void {
    const currentLicences = [...this.state.licences];

    const tempLicense = currentLicences.find(l => l.id == id);

    if(!tempLicense) return;

    tempLicense.ValidDate = newDate;
   
    this.setState(prevState => {
      return {licences: currentLicences};
    });
  }

  render() {
    return (
      <div>
        <LicenceList licences={this.state.licences} handleRemoveLicence={this.handleRemoveLicence} updateLicenseDate={this.updateLicenseDate} /> 
        <div className="d-flex align-items-center">
          <input placeholder="Syötä tunnus" ref={this.licenceNumberRef} type="text" />
          <Button variant="dark" onClick={this.handleAddNewLicence}>Lisää</Button> 
        </div>
      </div>
    );
  }
}
