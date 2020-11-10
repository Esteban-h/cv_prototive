import React from 'react'
import styles from '../styles/card.scss'


const CardContainer = ({info,info:{tittle,list}}) => {
    return (
            <div className={styles.Card}>
                <div className={styles.TittleContainer}>
                <h3>{tittle}</h3>
                    <div className={styles.ListContainer}>
                    {list.map(item=>{
                   return <p>
                        {item}
                    </p>
                })}
            
                    </div>
                </div>
                

          </div>
    )
}

export default CardContainer
