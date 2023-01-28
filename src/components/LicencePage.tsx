import React, {useState, useRef, useEffect, Component} from 'react';

import { License } from "../Classes/License";
import LicenceList from '../Functions/LicenceList';
import { v4 } from 'uuid';

interface Props {  
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

    const initialLicences = [new License(v4(),new Date(), "23423"), new License(v4(), new Date(), "32423")];
    this.state = {
       licences: initialLicences,
       setLicences: (newLicences: Array<License>) => {
           this.setState({licences: newLicences});
        }
    }
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
        <input placeholder="Syötä tunnus" ref={this.licenceNumberRef} type="text" />
        <button onClick={this.handleAddNewLicence}>Lisää</button> 
      </div>
    );
  }
}
