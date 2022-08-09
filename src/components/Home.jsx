import React from 'react'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Services from './Services'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div>
      <section id='home'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 mt-5">
                    <h1 className="display-4 fw-bolder mb-4 text-center text-white">Feels the Fresh Business Perspective</h1>
                    <p className='lend text-center fs-4 mb-5 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus veritatis, laboriosam dignissimos, itaque sequi mollitia debitis, molestiae consequuntur harum ut aut repellat architecto? Delectus nobis ipsum provident quae quos?</p>
                    <div className="buttons d-flex justify-content-center">
                        <NavLink to='/contact' className="btn btn-light me-4 rounded-pill px-4 py-2">Get Quote</NavLink>
                        <NavLink to='/services' className="btn btn-outline-light rounded-pill px-4 py-2">Our Services</NavLink>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
