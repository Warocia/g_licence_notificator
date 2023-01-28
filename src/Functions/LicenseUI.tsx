import React from 'react'
import { License } from "../Classes/License";

interface Props {
  license: License;
  handleRemoveLicence: (id: string) => void;
  updateLicenseDate: (id: string, newDate : Date | null) => void;
}

export default function LicenseUI({license, handleRemoveLicence, updateLicenseDate }: Props) {
  
  return (
    <tr key={license.id}>
        <td>{license.LicenseNumber}</td>
        <td>
        <input type="date" defaultValue={license.ValidDate?.toISOString().slice(0,10)} onChange={(e) => { 
                const dateValue = e.target.value;
                const newDate = new Date(dateValue);
                updateLicenseDate(license.id, newDate);
                }
          }>
          </input>
        </td>
        <td><button onClick={() => handleRemoveLicence(license.id)}>Poista</button></td>
    </tr>
  )
}