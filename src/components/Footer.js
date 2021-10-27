import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
         This is our ERP system for the managment fo dress showrooms 
        </p>
        <p className='footer-subscription-text'>
          You can do all sort of works thoroug our ERP system even by sitting in home also we can see the sales and data
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='number'
              type='number'
              placeholder='enter mobile number'
            />
            <Button buttonStyle='btn--outline'>click to get call back related to our services</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>equipment</Link>
            
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
         
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              ERP
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>ERP © klu</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='facebook'
              target='facebook.com'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='https://www.instagram.com/'
              target='https://www.instagram.com/'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
