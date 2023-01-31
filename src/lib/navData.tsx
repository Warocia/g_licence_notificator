import HomeIcon from '@mui/icons-material/Home';
import TocIcon from '@mui/icons-material/Toc';
import PeopleIcon from '@mui/icons-material/People';
 
export const navData = [
    {
        id: 0,
        adminRights: false,
        icon: <HomeIcon/>,
        text: "Koti",
        link: "/"
    },
    {
        id: 1,
        adminRights: false,
        icon: <TocIcon/>,
        text: "Lisenssit",
        link: "/licencepage"
    },
    {
        id: 2,
        adminRights: true,
        icon: <PeopleIcon/>,
        text: "Käyttäjät",
        link: "/usermanagement"
    }
]