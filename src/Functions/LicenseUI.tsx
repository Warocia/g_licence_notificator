import React from 'react'
import { License } from "../Classes/License";

export default function LicenseUI({ license }: { license: License }) {
  
  return (
    <tr key={license.LicenseNumber}>
        <td>{license.LicenseNumber}</td>
        <td>{license.ValidDate.toLocaleDateString('fi-FI', {
                                                  day: '2-digit',
                                                  month: '2-digit',
                                                  year: 'numeric'})}
        </td>
    </tr>
  )
}