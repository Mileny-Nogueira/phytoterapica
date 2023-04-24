import styles from './Search.module.css'

function Search(){
    return(
        <div className={styles.containerSearch}>
            <button className={styles.filtrar}>Filtrar</button>
            <button className={styles.ordenar}>Ordenar por</button>
        </div>
    );
}

export default Search;