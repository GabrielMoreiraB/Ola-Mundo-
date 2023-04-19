import styles from './Banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/minha_foto.png'

const Banner = () => {
    return ( 
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá Mundo!</h1>

                <p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal! Eu sou Gabriel Moreira, desenvolvedor Front-end. Aqui compartilho vários conhecimentos, e a história da minha jornada como Dev. Espero que goste :)</p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} />
                <img className={styles.minhaFoto} src={minhaFoto} alt='foto Gabriel Moreira' />
            </div>
        </div>
     );
}
 
export default Banner;