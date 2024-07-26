import React from 'react'
import Layout from './Layout'
import Footer from './Footer';
import contactus from '../images/contactus.PNG'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope,faPhoneAlt,faClock, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faEnvelope,faPhoneAlt,faClock,faLocationDot);
function ContactUs() {
  return (
    <>
    <Layout />
      <div className='container pt-1 contactUs'>
        <img src={contactus} alt='contactus' />
        <div className='text-center text-white headingtxt'>
          <p className='item'>Contact Us</p>
          <p className='item2'>Read our Story, How we started and about the Team</p>
      </div>
      </div>
      <div className='container'>
          <div className='row d-flex'>
             <div className='col-6 address'>
                <p className='heading1 mt-3'>ADDRESS</p>
                <div className='text'>
                  <p><FontAwesomeIcon icon={faLocationDot} /> 28 Seventh Avenue, Neew York, 10014</p>
                  <p><FontAwesomeIcon icon={faPhoneAlt} /> +880 1630 225 015</p>
                  <p><FontAwesomeIcon icon={faEnvelope} /> resturents@gmail.com</p>
                </div>
                <p className='heading1'>WORKING HOURS</p>
                  <div className='text'>
                    <p><FontAwesomeIcon icon={faClock} /> 7:30 am to 9:30pm on Weekdays</p>
                  </div>
                  <p className='heading1'><b>FOLLOW US</b></p>
                  {/* <div className='col d-flex followusicon'>
                    <div><FontAwesomeIcon icon={faInstagram} /></div>
                    <div className='item'><FontAwesomeIcon icon={faTwitter} /></div>
                    <div className='item'><FontAwesomeIcon icon={faFacebook} /></div>
                  </div> */}
            </div>
            <div className='col-6'>
            </div>
          </div>
      </div>
      <Footer />
    </>
  )
}
export default ContactUs