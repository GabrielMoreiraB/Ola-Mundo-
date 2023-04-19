import { NavLink} from 'react-router-dom';
import styles from './MenuLink.module.css'

const MenuLink = ({to, label}) => {
    return ( 
        <NavLink
        className={({ isActive }) => `
            ${styles.link} ${isActive ? styles.linkdestacado : ""}
        `}
        to={to}
    >
        {label}
    </NavLink>
     );
}
 
export default MenuLink;