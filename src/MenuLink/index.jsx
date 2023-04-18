import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css'

const MenuLink = ({to, label}) => {
    const localizacao = useLocation();
    return ( 
        <Link className={`
            ${styles.link}
            ${localizacao.pathname === to ? styles.linkdestacado : ''}
            `} to={to}> {label}
        </Link>
     );
}
 
export default MenuLink;