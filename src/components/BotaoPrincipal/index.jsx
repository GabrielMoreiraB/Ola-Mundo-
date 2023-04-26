
import styles from './Botao.module.css'

const BotaoPrincipal = ({cont}) => {
    return ( 
        <button className={styles.botao}>{cont}</button>
     );
}
 
export default BotaoPrincipal;