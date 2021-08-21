import React, { useState } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'

function Flashcard(props) {
    const [flip, setFlip] = useState(false)
    const { speak } = useSpeechSynthesis()
    return (
        <div className={`card`} onClick={() => setFlip(!flip)}>
            <div className="front">
                <div className="image">
                    <img style={{ height: '80px' }} src={props.flashcard.img} alt="" />
                </div>
                <div className="name">
                    {props.flashcard.name}
                </div>
                <button class="btn btn-outline-secondary my-1"  onClick={() => { speak({ text: props.flashcard.name }) }}>Listen & Learn</button>
            </div>
         
        </div>
    )
}

export default Flashcard
