import React from 'react'
import Table from 'react-bootstrap/Table';

import { License } from "../Classes/License";

import LicenseUI from "./LicenseUI";

export default function LicenceList({ licences }: { licences: Array<License> }) {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Lisenssi</th>
            <th>Asti voimassa</th>
          </tr>
        </thead>
        <tbody>
          {licences.map(license => {
            return <LicenseUI key={license.LicenseNumber} license={license} />
          })}
         </tbody>
      </Table>
    )
  }