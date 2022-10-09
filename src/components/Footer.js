import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Mailer = () => {
  function Footer(e) {
    e.preventDefault();

    emailjs.sendForm(
      'service_ul3hbzr', 
      'template_5nnou9z', 
      e.target, 
      "2wt75onPtDnBmb5uN"
    ).then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));
  }
    return (
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
          Sign up for our daily insider
          </p>
          <div className='input-areas'>
            <form onSubmit={Footer}>
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Enter Your Email'
              />
              <input type="submit" value="Subscribe" style={{padding: "5px 10px"}} />
            </form>
          </div>
        </section>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/'>Who We Are</Link>
              <Link to='/'>Our Story</Link>
              <Link to='/'>The Team</Link>
              <Link to='/'>Terms of Service</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Support</h2>
              <Link to='/'>FAQs</Link>
              <Link to='/'>Help</Link>
              <Link to='/'>Contact Us</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Explore</h2>
              <Link to='/'>Home</Link>
              <Link to='/'>Questions</Link>
              <Link to='/'>Articles</Link>
              <Link to='/'>Tutorials</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Social Media</h2>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Facebook</Link>
              <Link to='/'>Youtube</Link>
              <Link to='/'>Twitter</Link>
              <Link to='/'>LinkedIn</Link>
            </div>
          </div>
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
                DEV@DEAKIN
                <i class='fab fa-typo3' />
              </Link>
            </div>
            <small class='website-rights'>DEV@DEAKIN © 2022</small>
            <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
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
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Mailer;