import React from 'react'
import styles from '../styles/body.scss'
import Skills from './skills'
export const BodyContainer = ()=>{




    return (
        <div className={styles.Main}>
            <Skills/>
            <div className={styles.Card}>
            <h3>Holi</h3>
            <p>Hello Im graduaeted from the Universidad de Colima
                since 2019.
            </p>
            </div>
            
            
            
        </div>
    )
}


