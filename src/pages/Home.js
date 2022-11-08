import React from 'react';
import ServiceItem from '../components/ServiceItem';
import ProductList from '../components/product/ProductList';
function Home(){
 
      return (
        <div> 
             <div className='main'>
                <h2>TITLE HEADING</h2>
                <h5>Title description, Aug 7, 2022</h5>
                <div className='fakeimg'>
                <img src={require('./tech.jpg')} className="fakeimg" alt="background" />
                </div>
                <h3>Our Smart Solution services</h3>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                <ul>
                  <ServiceItem name="Custom Software" description="Translate your business requirements into a functional software application." />
                  <ServiceItem name="Mobile App Development" description="Invest in the growing mobile apps market and bring your business up to date." />
                  <ServiceItem name= "Web Development" description ="Expand your business market space with an innovative and modern web application." />
                  <ServiceItem name="Business Intelligence" description=" Monitor your business with our custom reporting and dashboard solutions." />
                  </ul>
                  <ProductList title="Product List" totalItems="8"/>
                  
           
        </div>
             </div> 
        
      )
    }
export default Home;