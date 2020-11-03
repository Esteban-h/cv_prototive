import React from 'react'
import styles from '../styles/skills.scss'

const Skills = () => {
    return (
        <div className={styles.Main}>
            <div className={styles.Card}>
                <h3>Programing</h3>
                <p>Python(basic)</p>
                <p>php(basic)</p>
                <p>html(basic)</p>
                

            </div>
            <div className={styles.Card}>
                <h3>FrameWorks</h3>
                <p>CV2</p>
            </div>
            <div className={styles.Card}>
                <h3>Lenguages</h3>
                <p>Spanish (Native)</p>
                <p>English (Conversational)</p>
            </div>
            
        </div>
    )
}

export default Skills
