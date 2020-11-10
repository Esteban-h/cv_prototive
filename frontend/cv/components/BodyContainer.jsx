import React from 'react'
import styles from '../styles/body.scss'
import information from '../../constants/information.json'
export const BodyContainer = ()=>{

    const title1="Introduction"
    const title2="Experience"



    return (
        <div className={styles.Main}>
            <div className={styles.Card}>
                <div className={styles.TitleContainer}>
                    <h3>{title1}</h3>
                    <div className={styles.TextContainer}>
                       <h4>{information.intro}</h4> 
                    </div>
                </div>

            </div>
            <div className={styles.ExpContainer}>
                <div className={styles.TitleContainer}>
                <h3>{title2}</h3>
                    <div className={styles.TextContainer}>
                        <h4>{information.experience1}</h4>
                        <div>
                            <h4>{information.experience2}</h4>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default BodyContainer


