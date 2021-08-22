import React from 'react'
import { Link } from 'react-router-dom'
function Section_3() {
  return (
<section>
        <div className="asl">
          <div className="row container-fluid">
            
            <div style={{marginTop:'10px',textAlign:'left',marginLeft:'-100px'}} className="col-lg-6">
            <div> 
            • ASL Recognition Machine: To provide more resources for deaf or HOH people to use, we have created an ASL Recognition Machine.<br/>• This uses machine learning to recognize American Sign Language (hand symbols) and translates it into English.<br/>• People can use this both for communication and to learn ASL.
            </div>
            <button  className="btn btn-dark btn-lg" style={{ width: '40%', marginLeft: '100px', marginTop: '40px' }}><Link style={{ textDecoration: 'none', color: 'white' }} target='_blank' to="/mycam">ASL</Link></button>
            </div>
            <div className="col-lg-6">
              <img className='img-fluid' style={{marginRight:'-400px',marginTop:'10px',borderRadius:'20px'}} src="images/hands-spelling-word-vote-in-sign-language-vector.jpg"/>
            </div>
            
          </div>
        </div>

      </section>
  )
}

export default Section_3
