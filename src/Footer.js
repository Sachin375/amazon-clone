import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer_Container'>
    <div className='firstFooter'>
<div className='footer'>
    <h3>Get to Know Us</h3>
    <p>About Us</p>
    <p>Careers</p>
    <p>Press Releases</p>
    <p>Amazon Cares</p>
    <p>Gift a Smile</p>
    <p>Amazon Science</p>
</div>
<div className='footer'>
<h3>Connect with Us</h3>
<p>Facebook</p>
<p>Twitter</p>
<p>Instagram</p>
</div>
<div className='footer'>
<h3>Make Money with Us</h3>
<p>Sell on Amazon</p>
<p>Sell under Amazon Accelerator</p>
<p>Amazon Global Selling</p>
<p>Become an Affiliate</p>
<p>Fulfilment by Amazon</p>
<p>Advertise Your Products</p>
<p>Amazon Pay on Merchants</p>
</div>
<div className='footer'>
<h3>Let Us Help You</h3>
<p>COVID-19 and Amazon</p>
<p>Your Account</p>
<p>Returns Centre</p>
<p>100% Purchase Protection</p>
<p>Amazon App Download</p>
<p>Amazon Assistant Download</p>
<p>Help</p>
</div>
</div>
<div className='secondFooter'>
    <div>
    <Link to="/">
        <img
          className="footer_header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
    </div>
    <div className='footer_country'>
        <p>Australia</p>
        <p>Brazil</p>
        <p>Canada</p>
        <p>China</p>
        <p>France</p>
        <p>Germany</p>
        <p>Italy</p>
        <p>Japan</p>
        <p>Mexico</p>
        <p>Nether</p>
        <p>lands</p>
        <p>Poland</p>
        <p>Singapore</p>
        <p>Spain</p>
        <p>TurkeyUnited</p>
        <p>Arab</p>
        <p>EmiratesUnited</p>
    </div>
</div>
    </div>
  )
}

export default Footer