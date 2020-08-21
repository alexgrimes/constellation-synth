import React from 'react';
import '../Footer.css'

const Footer = () => {
  return(
    
    <div className='main-footer'>
      <hr/>
      <h6 className='footer'> &copy;{new Date().getFullYear()}  Alex Grimes &hearts;&hearts;</h6>
    </div>
  )
}

export default Footer;