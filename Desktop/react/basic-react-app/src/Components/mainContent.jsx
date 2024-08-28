import './mainContent.css';
import tradeImage1 from '../assets/trade2.jpg'; 
import tradeImage2 from '../assets/trade4.jpg'; 
import tradeImage3 from '../assets/firmbee-com-jrh5lAq-mIs-unsplash.jpg';

import { FaBars, FaTimes } from 'react-icons/fa'; 
import React, { useState } from 'react';


const mainContent=()=>{
        const [isMenuOpen, setIsMenuOpen] = useState(false);

        const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
        };
return(
<>
<div className='main-div'>
      
<div className='main-outer-div1'>
<div className='div1'><p>Where Precision Meets Profit:</p></div>
<div className='div2'><p>Empowering Your Business with Seamless Trading Solutions and Unmatched Market Insights</p></div>
<div className='div3'><p>Your Gateway to Efficient Cross-Border Transactions and Market Insights.</p></div>
<div  className='div4'> <button>Find out how we work</button></div>
<img  className="image-class" src={tradeImage1}></img>
</div>

</div>

<div className='main-outer-div2'>
 <div className='main-inner-div2'>
  <h1>Why choose<br/> Shamaq traders</h1>
  <p>At Shamaq Traders, we are committed to providing you with exceptional trading services backed by our extensive expertise and 
    experience in the industry.  Our customer-centric approach ensures that your satisfaction is at the heart of everything we do.
     Choose us for a seamless, trustworthy, and successful trading experience.</p>
     </div>
     <img  className="image-class2" src={tradeImage3}></img>
</div>

<div className='main-outer-div3'>
<div className='main-inner-div2'>
  <h1>What we offer?</h1>
  <h3>Global Sourcing and Procurement</h3>
  <p> We connect you with trusted suppliers from Pakistan 
    and around the world
    , ensuring access to high-quality products at competitive prices.</p>
  <hr/>
  <h3>Logistics and Supply Chain Management:</h3>
  <p> Our team manages the entire logistics process,
     from warehousing to transportation and distribution, 
     ensuring your products reach their destination efficiently and securely.</p>
  <hr/>
  <h3>Customs Clearance and Compliance</h3>
  <p> Our experts handle all the necessary paperwork and
     compliance requirements, making international 
     trading hassle-free for you.</p>
</div>
</div>
   {/* <div className='main-div'>
   <div className='outer-div'>
   <div className='div1'><p>Where Precision Meets Profit:</p></div>
   <div className='div2'><p>Empowering Your Business with Seamless Trading Solutions and Unmatched Market Insights</p></div>
   <div className='div3'><p>Your Gateway to Efficient Cross-Border Transactions and Market Insights.</p></div>
   <div  className='div4'> <button>Find out how we work</button></div>
   </div>
   <img src={tradeImage2}></img>
   </div>
      <div className='main-div'>
      <div className='outer-div'>
      <div className='div1'><p>Where Precision Meets Profit:</p></div>
      <div className='div2'><p>Empowering Your Business with Seamless Trading Solutions and Unmatched Market Insights</p></div>
      <div className='div3'><p>Your Gateway to Efficient Cross-Border Transactions and Market Insights.</p></div>
      <div  className='div4'> <button>Find out how we work</button></div>
      </div>
      <img src={tradeImage3}></img>
      </div> */}
      </>
)



}


export default mainContent;