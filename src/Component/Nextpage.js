import React from 'react'
import Ringmobile from '../Images/ringMobile.png'

import star from '../Images/star.png'
import "aos/dist/aos.css";

import '../Componentstyle/Nextpage.css'
const Nextpage = () => {


  return (
    <div className='main-container' >

        <div data-aos="fade-up" data-aos-duration="1000" className='mobile-phone' >
          <img className='ringmobile' src={Ringmobile} alt='circle-rings' />       
        </div>

        <div data-aos="fade-left" data-aos-duration="2000" className='some-text' >
            <h6>FEATURES</h6>
<h1>Uifry Premium</h1>
<h4> <img className='star-logo' src={star} alt="star-logo" /> Budgeting Intervals</h4>
<p>Et aliquip sint consequat dolore et dolore. Fugiat incididunt <br/> nulla dolor est irure cupidatat esse ad ad.</p>
<h4><img className='star-logo' src={star} alt="star-logo" /> Budgeting Intervals</h4>
<p>Et aliquip sint consequat dolore et dolore. Fugiat incididunt <br/> nulla dolor est irure cupidatat esse ad ad.</p>
<h4><img className='star-logo' src={star} alt="star-logo" /> Budgeting Intervals</h4>
<p>Et aliquip sint consequat dolore et dolore. Fugiat incididunt <br/> nulla dolor est irure cupidatat esse ad ad.</p>
        </div>
     
    </div>
  )
}

export default Nextpage
