import React from 'react'
import styles from '../styles/header.scss'

const HeaderContainer = () => {
    return (
        <div className={styles.HeaderContainer}>
        <div className={styles.HeadItem}>
            <img src="/images/foto.png" />
            <p>
            <h3>Esteban Hernandez Anguiano</h3>
            </p>
        </div>
        <p className={styles.HeadItem}>
            <dl>
                <dt><b>Computacional Systems Engineering</b></dt>
                <dd><em>Universidad de Colima</em></dd>
                <dd><small>Mechanic and Electricity Engineering Faculty</small></dd>
            </dl>
            


        </p>
        <p className={styles.HeadItem}>
            Arbol de Benjamin
            <br/>#472
            <br/>Col.Rinconada de Pereira
        </p>
    </div>
    )
}

export default HeaderContainer
