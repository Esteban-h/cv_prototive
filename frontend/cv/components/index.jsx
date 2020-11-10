import React from 'react'
import styles from '../styles/main.scss'
import BodyContainer from './BodyContainer'
import HeaderContainer from './headerContainer'
import Skills from './skills'

export const MainScreen = () => {
    return (
        
        <div className={styles.MainContainer}>
            <HeaderContainer/>
            <div className={styles.BodyParent}>
            <Skills/>
            <BodyContainer/>
            </div>

     
        </div>
         
    )
}
export default MainScreen