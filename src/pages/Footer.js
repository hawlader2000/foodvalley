import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import {faPhoneAlt,faClock,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faPhoneAlt,faClock);
function Footer() {
  return (
    <>
      <div>
        <h4 className='text-center'>Our Branch</h4>
      </div>
      <div className='container bg-danger p-4 footer'>
        <div className='col d-flex'>
          <div>
            <h5 className='text-center'>Robert Food</h5>
            <p>1986 Hilltop DriveBorger, TX 79007</p>
            <div className='col d-flex time'>
              <div>
                <p><FontAwesomeIcon icon={faClock} /> 7.30 AM - 9.30 PM
                </p>
              </div>
              <div className='item'>
                <p><FontAwesomeIcon icon={faPhoneAlt} /> +880 1630-225015</p>
              </div>
            </div>
            <p className='text-center'>Click to View Google Map</p>
          </div>
          <div className='footeritem'>
          <h5 className='text-center'>Mark A. Reed Food</h5>
            <p>4877 Rose AvenueNew Orleans, LA 70112</p>
            <div className='col d-flex time'>
              <div>
                <p><FontAwesomeIcon icon={faClock} /> 7.30 AM - 9.30 PM
                </p>
              </div>
              <div className='item'>
                <p><FontAwesomeIcon icon={faPhoneAlt} /> +880 1630-225015</p>
              </div>
            </div>
            <p className='text-center'>Click to View Google Map</p>
          </div>
          <div className='footeritem'>
            <h5 className='text-center'>Karie K. Hill Food</h5>
            <p >1509 Peaceful LaneCleveland, OH 44115</p>
            <div className='col d-flex time'>
              <div>
                <p><FontAwesomeIcon icon={faClock} /> 7.30 AM - 9.30 PM
                </p>
              </div>
              <div className='item'>
                <p><FontAwesomeIcon icon={faPhoneAlt} /> +880 1630-225015</p>
              </div>
            </div>
            <p className='text-center'>Click to View Google Map</p></div>
        </div>
      </div>
      <div className='container bg-dark text-light'>
        <p className='text-center py-4'>Copyright © 2022 | Md Badol Hawlader</p>
      </div>
    </>
  )
}

export default Footer