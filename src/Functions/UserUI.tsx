import React, {useState} from 'react'
import { LicenceUser } from "../Classes/LicenceUser";
import Button from 'react-bootstrap/Button';

interface Props {
  user: LicenceUser;
  handleRemoveUser: (id: number) => void;
  updateLicenseUser: (id: number, email : string, password : string, isAdmin : boolean ) => void;
}

export default function UserUI({user, handleRemoveUser, updateLicenseUser}: Props) {
  
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [isAdmin, setIsAdmin] = useState(user.isAdmin);

  return (
    <tr key={user.id}>
        <td>{user.userName}</td>
        <td><input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
        <td><input type="text" value={password} onChange={(e) => setPassword(e.target.value)} /></td>
        <td>
          <input type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
        </td>
        <td>
          <Button variant="dark" onClick={() => updateLicenseUser(user.id, email, password, isAdmin)}>Muuta</Button>
          <Button variant="dark" onClick={() => handleRemoveUser(user.id)}>Poista</Button>
        </td>
    </tr>
  )
}