import React from 'react'
import Flashcard from './Flashcard'
import './App.css'
import Carousel from 'react-bootstrap/Carousel'
function Flashcardlist(props) {
    return (
           
            <Carousel  indicators={false} variant="dark" className='Carousel_style text-center'  fade>
            {
                props.flashcards.map(flashcard => {
                    return (
                            <Carousel.Item  > 
                            <Flashcard flashcard={flashcard}  key={flashcard.id} />
                            </Carousel.Item>
                    )
                })
            }
            </Carousel>
    
  
    )
}

export default Flashcardlist
