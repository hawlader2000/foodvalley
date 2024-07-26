import React from 'react'
import Layout from './Layout'
import aboutus from '../images/aboutus.jpg';
import fish from '../images/fish.jpeg';
import shrimp from '../images/shrimp.jpg';
import cheif from '../images/cheif.png';
import Footer from './Footer';
function About() {
  return (
    <>
    <Layout />
      <div className='container pt-1 aboutus'>
        <img src={aboutus} alt='aboutus' />
        <div className='text-center text-white headingtxt'>
          <p className='item'>About Us</p>
          <p className='item2'>Read our Story, How we started and about the Team</p>
        </div>
      </div>
      <div className='container row d-flex aboutusimg2'>
            <div className='col-6'>
              <img src={fish} alt="" />
            </div>
            <div className='col-6 paragraphtxt'>
              <p>Opaleye yellowtail snapper, velvet catfish, graveldiver banded killifish, Old World rivuline catalufa eagle ray Moorish idol. Herring smelt barbeled dragonfish, tommy ruff.</p>
              <p>Queen danio velvet catfish Sacramento blackfish, bullhead shark, Colorado squawfish Russian sturgeon clown triggerfish swamp-eel paradise fish. Hake cookie-cutter shark silver carp hawkfish snipe eel armorhead catfish, moray eel silverside! Bluegill toadfish, orangespine unicorn fish. Manta Ray Moorish idol</p>
            </div>
      </div>
      <div className='contianer mt-4 storysection'>
        <h4 className='text-center text-danger pb-2'>Our Story</h4>
        <div className='container row d-flex'>
          <div className='col-6'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage</p>
          </div>
          <div className='col-6'>
          <img src={shrimp} alt='shrimp'/>
          </div>
        </div>
      </div>
      <div className='container ourshef mt-2'>
        <div className='row'>
          <div className='col-6 pt-5'>
            <p className='text-danger'>TASTY AND CRUNCHY</p>
            <p>Our Chef</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidition ullamco laboris nisi ut aliquip ex ea commodo condor consectetur adipiscing elit, sed do eiusmod tempor incidition ullam.</p>
          </div>
          <div className='col-6 cheif'>
            <img src={cheif} alt='cheif' />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About