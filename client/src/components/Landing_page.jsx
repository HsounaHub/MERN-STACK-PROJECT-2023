import React from 'react'
import Navbar from './Landing_Page/Navbar.jsx'
import Hero from './Landing_Page/Hero.jsx'
import Slide_Img from './Landing_Page/Slides_Img.jsx'
import Footer from './Landing_Page/Footer/Footer.jsx'
import Steps from './Landing_Page/Steps.jsx'
import Features from './Landing_Page/Features.jsx'
import carData from "../assets/data/carData.js";
import CarItem from "./Landing_Page/CARITEM.jsx";
import { Container, Row } from "reactstrap";

function Landing_page() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Steps/>
    <Slide_Img/>
    <section>
        <Container className='w-auto h-auto m-auto ml-20'>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl m-10">FEATURED CARS</h1>
          <Row className='flex flex-wrap h-auto gap-5 '>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    <Features/>
    <Footer/>
    
    </div>
  )
}

export default Landing_page