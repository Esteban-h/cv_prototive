import React from 'react'
import styles from '../styles/skills.scss'
import CardContainer from './cardContainer'



const card1 ={
    tittle:"Programing",
    list:["python(basic)","php(basic)","html/CSS","react(basic)"]
}

const card2 ={
    tittle:"FrameWorks",
    list:["CV2","pygame"]
}

const card3 ={
    tittle:"Lenguages",
    list:["Spanish(native)","English (Conversational)"]
}

const Skills = () => {
    return (
        <div className={styles.Main}>
            <CardContainer info={card1}/>
            <CardContainer info={card2}/>
            <CardContainer info={card3}/>
            
        </div>
    )
}

export default Skills
