import styles from "./sidenav.module.css"
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { navData } from "../lib/navData";
import { useState } from "react";
import JSONUser from '../Interfaces/JSONUser';

interface Props {
    user: JSONUser | null;

}

export default function Sidenav(user : Props) {
    const [open, setopen] = useState(true)
    const toggleOpen = () => {
        setopen(!open)
        
    }
    
  return (
    <div className={open?styles.sidenav:styles.sidenavClosed}>
        <button className={styles.menuBtn} onClick={toggleOpen}>
            {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
        </button>
        {navData.filter(item => !item.adminRights || user.user?.IsAdmin).map(item =>{
            return <Nav.Link key={item.id} as={Link} className={styles.sideitem} to={item.link}>
            {item.icon}
            <span className={styles.linkText}>{item.text}</span>
        </Nav.Link>
        })}
    </div>
  )
}