import React from 'react'

function Section_2() {
    return (
        <section id="features" className="white-section">
        <div className="row container-fluid">
          <div className="col-lg-4">
            <i className="fas fa-check-circle feature-icon"></i>
            <h3 className="feature-heading">Understand</h3>
            <p className="feature-descrip">Learn about their disablilty so that you can be a better friend!</p>
          </div>
          <div className="col-lg-4">
            <i className="fas fa-bullseye feature-icon"></i>
            <h3 className="feature-heading">Support</h3>
            <p className="feature-descrip">Educate more people about the symptoms and how they can help</p>
          </div>
    
          <div className="col-lg-4">
            <i className="fas fa-heart feature-icon"></i>
            <h3 className="feature-heading">Empower</h3>
            <p className="feature-descrip">Instill a sense of belonging , make everyone feel welcomed!</p>
          </div>
        </div>
      </section>
    )
}

export default Section_2
