import styles from './Products.module.css'

function Products(props){
    return(
        <div className={styles.quadroprodutos}>
            <img src={props.foto} alt="Foto do produto"></img>
            <h3 className={styles.nome}>{props.nome}</h3>
            <h4 className={styles.valor}>{props.valor}</h4>
            <p className={styles.parcelado}>{props.parcelado}</p>
        </div>
    );
}

export default Products