import styles from './Title.module.css'

function Title(){
    return(
        <div className={styles.backgroundimage}>
            <h1>Óleos Essenciais</h1>
            <p>Óleos essenciais são compostos naturais extraídos da parte aromática das plantas, como folhas, flores, galhos, troncos, raízes e casca de frutos.</p>
        </div>
    );
}

export default Title;