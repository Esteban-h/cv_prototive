import React from 'react'
import styles from '../styles/main.scss'
import {BodyContainer} from './BodyContainer'

export const MainScreen = () => {
    return (
        
        <div className={styles.MainContainer}>
            <div className={styles.HeaderContainer}>
                <div className={styles.HeadItem}>
                    <img src="/images/foto.png" />
                    <p>
                    Esteban Hernandez Anguiano
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
            <BodyContainer/> 

             
        </div>
         
    )
}
export default MainScreen