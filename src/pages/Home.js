import React from 'react'
import Layout from './Layout'
import Footer from './Footer';
import chicken from '../images/chicken.png';
import lemon from '../images/lemon.jpg';
import shrimp from '../images/shrimp.jpg';
import pesta from '../images/pesta.jpg';
import fish from '../images/fish.jpeg';
import pizza from '../images/pizza.jpg';
import facebook from '../icon/facebook.png';
import instagram from '../icon/instagram.png';
import twitter from '../icon/twitter.png';
import linkedin from '../icon/linkedin.png';
function Home() {
  return (
    <>
    <Layout />
      <div className='container pt-3'>
        <div className='row headingtext'>
        <div className='col-6'>
          <p className='text-danger'><i>Best In Town</i></p>
          <h2 className='item'><i>ENJOY OUR CHICKEN</i></h2>
          <h2><i>BURGER FAST FOOD</i></h2>
        </div>
        <div className='col-6'>
          <img src={chicken} alt="burger" />
          <div className='d-flex box'>
          <div className='item'><button className='btn btn-danger text-white'>Order Now</button></div>
          <div className='item1'><p>Price : $10.50</p></div>
        </div>
        </div>
        </div>
        <div className='d-flex socialmediaicon'>
          <div><img src={facebook} alt="facebook" /></div>
          <div className='item'><img src={instagram} alt="instagram" /></div>
          <div className='item'><img src={twitter} alt="twitter" /></div>
          <div className='item'><img src={linkedin} alt="linkedin" /></div>
        </div>
      </div>
      <div className='container text-center populardish'>
        <p className='text-danger'>Food Items</p>
        <h4 className='text-danger'>Popular Dishes</h4>
        <div className='d-flex'>
           <div className='item0'>
           <img src={lemon} alt="lemon" />
           </div>
           <div className='item'><img src={shrimp} alt="shrimp" /></div>
           <div className='item'><img src={fish} alt="fish" /></div>
           <div className='item'><img src={pesta} alt="pesta" /></div>
           <div className='item'><img src={pizza} alt="pizza" /></div>
        </div>
      </div>
      <div className='container section2'>
        <p className='text-center mt-2'>RICH & HEALTHY</p>
        <div className="row d-flex">
          <div className='col-4 img1'>
            <img src={pizza} alt='pizza' />
          </div>
          <div className='col-8'>
            <h4 className='text-danger'>Highest quality artisangrains,<br />proteins & seasonal ingredients</h4>
            <p className='pt-2 pb-2'>Righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desires, that they cannot foresee.</p>
            <div className='row d-flex'>
              <div className='col item1'>
                <p>&#9733; Simple and easy to distinguish</p>
                <p>&#9733; Pleasure of the momentblinded desire</p>
                <p>&#9733; Able to do what we like best</p>
                <button className='btn btn-danger'>Read More</button>
              </div>
              <div className='col item2'>
                <img src={fish} alt="fish" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Home