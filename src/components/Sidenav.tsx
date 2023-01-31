import styles from "./sidenav.module.css"
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { navData } from "../lib/navData";
import { useState } from "react";
import JSONUser from '../Interfaces/JSONUser';
import { Button } from "react-bootstrap";
import AuthService from '../Authentication/AuthService';
import LogoutIcon from '@mui/icons-material/Logout';

interface Props {
    user: JSONUser | null;

}

export default function Sidenav(user : Props) {
    const [open, setopen] = useState(true)
    const toggleOpen = () => {
        setopen(!open)
        
    }
    
    function logoutHandler(){
        AuthService.logout();

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
            <Nav.Link key="logout" as={Link} to="#" className={styles.sideitem} onClick={logoutHandler}>
                <LogoutIcon/>
                <span className={styles.linkText}>Kirjaudu ulos</span>
            </Nav.Link>
        </div>
  )
}