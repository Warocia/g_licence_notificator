import React, {useState, useRef, useEffect, Component} from 'react';
import { LicenceUser } from "../Classes/LicenceUser";

import styles from "./LicencePage"

import { License } from "../Classes/License";
import UserList from '../Functions/UserList';
import { v4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import UserService from '../Authentication/UserService';
import { Console } from 'console';
import JSONDataLicense from '../Interfaces/JSONDataLicense';

interface Props {  
}


interface State {
  users: Array<LicenceUser>; 
  setUsers: (newUsers: Array<LicenceUser>) => void;
}

export default class UserManagement extends Component<Props, State> {

  readonly userNameRef = React.createRef<HTMLInputElement>();
  readonly passwordRef = React.createRef<HTMLInputElement>();
  readonly emailRef = React.createRef<HTMLInputElement>();

  constructor(props : Props) {
    super(props);

    this.handleRemoveUser = this.handleRemoveUser.bind(this);
    this.updateLicenseUser = this.updateLicenseUser.bind(this);
    this.handleAddNewUser = this.handleAddNewUser.bind(this);
    
    this.state = {
      users: [],
      setUsers: (newUsers: Array<LicenceUser>) => {
          this.setState({users: newUsers});
      }
    }
  }

  componentDidMount() {
    UserService.getUsers().then(
      restAPIUsers => {
        this.setState(prevState => {
          return {users: restAPIUsers};
        });
      }
    );
  }

  handleAddNewUser(): void {
    
    //Check username
    if (!this.userNameRef.current) {
      return;
    }
    const username = this.userNameRef.current.value;
    if(username === '') return;

    //Check password
    if (!this.passwordRef.current) {
      return;
    }
    const password = this.passwordRef.current.value;
    if(password === '') return;

    //Check email
    if (!this.emailRef.current) {
      return;
    }
    const email = this.emailRef.current.value;
    if(email === '') return;

    const newUser = new LicenceUser(0, username, password, email, false, []);
    
    UserService.createUser(newUser)
        .then(newUserFromAPI => {
          this.setState(prevState => {
            return {users: [...prevState.users, newUserFromAPI]};
          });
        })
        .catch(error => {
          console.error(error.message);
        });
    
    this.userNameRef.current.value = "";
    this.passwordRef.current.value = "";
    this.emailRef.current.value = "";
  }

  handleRemoveUser(removeThisId : number): void {
    const currentUsers = [...this.state.users];

    const updatedUsers = currentUsers.filter((item) => {
      return item.id !== removeThisId;
    });
   
    UserService.deleteUser(removeThisId);

    this.setState(prevState => {
      return {users: updatedUsers};
    });
  }

  updateLicenseUser(id: number, email : string, password : string, isAdmin : boolean ) : void {
    const currentUsers = [...this.state.users];

    const tempUser = currentUsers.find(l => l.id == id);

    if(!tempUser) return;

    tempUser.email = email;
    tempUser.password = password;
    tempUser.isAdmin = isAdmin;

    const updatedUsers = currentUsers.filter((item) => {
      return item.id !== id;
    });

    UserService.updateUser(tempUser)
        .then(userFromAPI => {
          this.setState(prevState => {
            return {users: [...updatedUsers, userFromAPI]};
          });
        })
        .catch(error => {
          console.error(error.message);
        });
  }


  render() {
    return (
      <div>
      <UserList users={this.state.users} handleRemoveUser={this.handleRemoveUser} updateLicenseUser={this.updateLicenseUser} /> 
      <div className="d-flex align-items-center">
          <input placeholder="Syötä käyttäjätunnus" ref={this.userNameRef} type="text" />
          <input placeholder="Syötä salasana" ref={this.passwordRef} type="text" />
          <input placeholder="Syötä sähköposti" ref={this.emailRef} type="text" />
          
          <Button variant="dark" onClick={this.handleAddNewUser}>Lisää</Button> 
        </div>
    </div>
    );
  }
}
