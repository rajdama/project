import React from 'react'
import Speech from './Speech'
import {Link} from 'react-router-dom'
import My_Webcam from './My_Webcam'
function Section_3() {
    return (
        <section>
        <div className="asl">
         <div className="row container-fluid">
           <div className="col-lg-6">
            <img style={{marginLeft:'-200px'}}  src="images/deaf-mute-talking.jpg"/>
          </div>
            <div style={{marginTop:'80px'}} className="col-lg-6"> 
              <h3 style={{textAlign:'left',marginLeft:'100px'}}>Speech and Hearing Disability</h3>
              <div style={{marginLeft:'100px'}}>
             
                  
                  <p style={{textAlign:'left'}}>•More than 90% of children who are deaf or have hearing loss are born to hearing parents.<br/>
                  •About 33% of working-adults with hearing have a bachelor’s degree or higher. In comparison to this, only ~ 18% of people who are deaf or have hard of hearing have a bachelor’s degree or higher<br/>
                 •It is predicted that by 2050, over 2.5 bildivon people will have some degree of hearing loss.</p>

</div>
      <button className="btn btn-dark btn-lg" style={{width:'40%',marginLeft:'50px',marginTop:'20px'}}><Link style={{textDecoration:'none',color:'white'}} target='_blank'  to="/mycam">ASL</Link></button> 
      
            </div>
          </div> 
        
        </div>
        </section>
    )
}

export default Section_3
