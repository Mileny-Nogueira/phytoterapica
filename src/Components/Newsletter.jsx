import styles from './Newsletter.module.css'

function Newsletter(){
    return(
        <div className={styles.containernews}>
            <div className={styles.info}>
                <h4>Inscreva-se</h4>
                <p>E receba novidades e promoções</p>
            </div>
            <input type="text" placeholder='Seu e-mail'/>
            <button>Assinar newsletter</button>
        </div>
    );
}

export default Newsletter