import React, { useState } from 'react'
import {useSpeechSynthesis} from 'react-speech-kit'

function Flashcard(props) {
    const [flip, setFlip] = useState(false)
    const {speak} = useSpeechSynthesis()
    return (
        <div className={`card ${flip ? 'flip' : ''}`} onClick = {()=> setFlip(!flip)}>
            <div  className="front">
                <div className="image">
                    <img style = {{height:'100px',borderRadius:'20px'}}  src={props.flashcard.img} alt="" />
                </div>
                <div className="name">
                    {props.flashcard.name}
                </div>
            </div>
           <div className="back">
           <button onClick = {()=>{speak({text : props.flashcard.name})}} className={`btn ${flip ? 'none' : ''}`}>Hear</button>
           </div>
        </div>
    )
}

export default Flashcard
