import styles from './Footer.module.css'
import iconFacebook from './imagens/facebook.png'
import iconInstagram from './imagens/instagram.png'
import iconTwitter from './imagens/twitter.png'
import iconYt from './imagens/youtube.png'
import Logo from './imagens/logoheader.png'
import Pgto from './imagens/formasdepgto.png'

function Footer(){
    return(
        <footer className={styles.containerfooter}>
            <div>
                <img src={iconFacebook} alt="ícone do facebook" />
                <img src={iconInstagram} alt="ícone do instagram" />
                <img src={iconTwitter} alt="ícone do twitter" />
                <img src={iconYt} alt="ícone do youtube" />
            </div>
            <div>
                <img src={Logo} alt="logo" />
            </div>
            <div>
                <img src={Pgto} alt="formas de pagamento" />
            </div>
        </footer>
    );
}

export default Footer