import { useState } from 'react'
import '../styles/footer.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


export default function page() {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
        });
      }, []);
  return (
    <footer data-aos="fade-up">
        <div className='first_section'>
            <h2>
                What will you build ?
            </h2>
            <p>Explore our guides and begin implementing  <br />now. We're eager to discover what you'll <br /> create.</p>
            <input type="text" placeholder='email@abc.com' />
            <button className='subscribe'>Subscribe</button>
        </div>
        <div className='second_section'>
            <h2>
                About us
            </h2>
            <p>Why we best</p>
            <p>What we do</p>
            <p>Services</p>
            <p>API Doc</p>
        </div>
        <div className='second_section'>
            <h2>
               Product
            </h2>
            <p>Login</p>
            <p>Pricing</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </div>
        <div>
           <h2>Follow us</h2> 
        </div>

    </footer>

  )
}

