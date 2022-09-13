import React from 'react'
import AboutImg from '/assets/about1.jpg'

function About() {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={AboutImg} alt="about" className='w-75 mt-5' />
                </div>
                <div className="col-md-6">
                    <h3 className="fs-5 mb-0">About us</h3>
                    <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                    <hr className='w-50'/>
                    <p className='lend mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate, doloremque fuga distinctio sunt deserunt modi est tempora aliquam. Temporibus ipsum labore ipsa nobis quisquam culpa eaque numquam? Sunt dicta velit cum fugiat numquam accusantium voluptate qui ipsam obcaecati. At, veniam blanditiis. Dicta ratione nesciunt tempora suscipit omnis maxime blanditiis!</p>
                    <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                    <button className="btn btn-outline-primary rounded-pill px-4 ms-2">Contact Us</button>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About
