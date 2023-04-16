import React from 'react'
import "./about.css"

function About() {
  
  
  
 
  return (
    <div className='main'>
    <div className='card1'>
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src='src/components/About/contact.jpg' alt="example image"/>
          <div className="card-body">
            <h5 className="card-title">Contact</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Get in Touch</a>
          </div>
      </div>
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src="src/components/About/images.png" alt="example image"/>
          <div className="card-body">
            <h5 className="card-title">Address</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Write a letter</a>
          </div>
      </div>
     
   
    </div>
    </div>
  )
}

export default About
