import React from 'react'

function Section_1() {
    return (
        <div>
              <section id="title" className="colored-section">
    <div className="container-fluid">

      <nav className="navbar navbar-dark  navbar-expand-lg" style={{backgroundColor: "#7868E6",marginBottom:'30px'}}>
        <img src="images\istockphoto-1147148668-612x612.jpg" className="nav-image" alt=""/>
        <a className="navbar-brand " href="">Thought.School.</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#disabilities">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#asl">ASL</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ADHD">ADHD</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#flashcards">Dyslexia</a>
            </li>
          </ul>
        </div>
      </nav>



      
      <div className="row">
        <div className="col-lg-6" >
          <h1 className="big-heading">Inclusive Learning</h1>
          <p className="subtitle-text">Learning for everyone!</p>
          <p className="subtitle-text"><span><strong>Be</strong>Enabled</span></p>
        </div>
        <div className="col-lg-6 ">
          <img className="title-image animated"  src="images\volunteers-helping-disabled-people_179970-643.png" alt="iphone-mockup"/>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}

export default Section_1
