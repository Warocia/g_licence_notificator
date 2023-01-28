import React from 'react'
import Table from 'react-bootstrap/Table';

import { License } from "../Classes/License";

import LicenseUI from "./LicenseUI";

interface Props {
  licences: Array<License>;
  handleRemoveLicence: (id: string) => void;
  updateLicenseDate: (id: string, newDate : Date | null) => void;
}

export default function LicenceList({ licences, handleRemoveLicence, updateLicenseDate }: Props) {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Tunnus</th>
            <th>Asti voimassa</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {licences.map(license => {
            return <LicenseUI key={license.id} license={license} handleRemoveLicence={handleRemoveLicence} updateLicenseDate={updateLicenseDate} />
          })}
         </tbody>
      </Table>
    )
  }