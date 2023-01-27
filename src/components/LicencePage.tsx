import React, {useState, useRef, useEffect, Component} from 'react';

import { License } from "../Classes/License";
import LicenceList from '../Functions/LicenceList';

interface Props {  
}
  
interface State {
    licences: Array<License>
}

export default class LicencePage extends Component<Props, State> {

  constructor(props : Props) {
    super(props);

    const initialLicences = [new License(new Date(), "23423"), new License(new Date(), "32423")];
    this.state = { licences: initialLicences};
  }

  render() {
    return (
      <div>
       <LicenceList licences={this.state.licences} /> 
       
      </div>
    );
  }
}
