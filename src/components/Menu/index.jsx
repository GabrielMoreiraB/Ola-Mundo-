
import styles from './menu.module.css'
import MenuLink from '../MenuLink';

const Menu = () => {
    
    return ( 
        <header>
            <nav className={styles.navegacao}>
                <MenuLink 
                to="/"
                label='Inicio' />
                <MenuLink 
                to="/sobremim"
                label='Sobre Mim' />
            </nav>
        </header>
     );
}
 
export default Menu;