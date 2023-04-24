import Logo from './imagens/logoheader.png'
import IconUsuario from './imagens/usuario.png'
import IconCarrinho from './imagens/carrinho.png'
import styles from './Header.module.css'

function Header(){
    return(
        <div className={styles.containerheader}>
            <header>
                <div className={styles.containerlogo}>
                    <img className={styles.logo} src={Logo} alt="Imagem"/>
                </div>
                <div className={styles.containerbuttons}>
                    <input className={styles.busca} type="text" placeholder="O que você procura?"></input>
                    <button className={styles.oferta}>-5% na primeira compra <spam className={styles.porcentagem}>%</spam></button>
                    <img src={IconUsuario} alt="ícone de usuário"/>
                    <img src={IconCarrinho} alt="ícone de compras"/>
                </div>  
            </header>
            <nav>
               <ul>
                    <li>Óleos essenciais</li>
                    <li>Óleos vegetais</li>
                    <li>Sinergias</li>
                    <li>Cosméticos naturais</li>
                    <li>Higiene pessoal</li>
                    <li>Aromatizadores</li>
                    <li>Suplementos</li>
                    <li>Acessórios</li>
                    <li>Ofertas</li>
                    <li>Consultor(a)</li>
               </ul>
            </nav>
        </div>
    );
}

export default Header;