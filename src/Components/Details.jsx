import styles from './Details.module.css'
import iconVegano from './imagens/folha.png'
import iconAnimal from './imagens/pegada.png'
import iconAgua from './imagens/agua.png'
function Details(){
    return(
        <div className={styles.containerdetails}>
            <div className={styles.containeritens}>
                <img src={iconVegano} alt="ícone de vegano" />
                <div>
                    <h1>Vegano</h1>
                    <p>sem componentes de origem animal</p>
                </div>
            </div>
            <div className={styles.containeritens}>
                <img src={iconAnimal} alt="ícone de pata de animal" />
                <div>
                    <h1>Cruelty-Free</h1>
                    <p>não testado em animais</p>
                </div>
            </div>
            <div className={styles.containeritens}>
                <img src={iconAgua} alt="ícone de uma gota de água" />
                <div>
                    <h1>100% Puro</h1>
                    <p>óleos puros e naturais</p>
                </div> 
            </div>
        </div>
    );
}

export default Details