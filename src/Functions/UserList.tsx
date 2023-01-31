import React from 'react'
import Table from 'react-bootstrap/Table';

import { LicenceUser } from "../Classes/LicenceUser";

import UserUI from "./UserUI";

interface Props {
  users: Array<LicenceUser>;
  handleRemoveUser: (id: number) => void;
  updateLicenseUser: (id: number, email : string, password : string, isAdmin : boolean ) => void;
}

export default function UserList({ users, handleRemoveUser, updateLicenseUser}: Props) {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Tunnus</th>
            <th>Email</th>
            <th>Salasana</th>
            <th>Ylläpitäjä</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return <UserUI key={user.id} user={user} handleRemoveUser={handleRemoveUser} updateLicenseUser={updateLicenseUser} />
          })}
         </tbody>
      </Table>
    )
  }