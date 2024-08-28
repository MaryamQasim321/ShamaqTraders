import "./services.css"
import image1 from '../assets/trade1.jpg'; 
import image2 from '../assets/trade5.jpg'; 
import image3 from '../assets/trade6.jpg'; 


export function Services(){


   

    return (

    <div className="services-outer">
      <div className="services-upper">
      <h2> Our Services</h2>
<p>At Shamaq Traders, we are committed to providing exceptional 
trading solutions that cater to your specific business needs.
 Our comprehensive range of services ensures a seamless and efficient
  trading experience, from sourcing high-quality products to managing logistics
   and compliance. Discover how we can support your business goals with our tailored services.</p>
   </div>



  <div className="services-1">
   <div className="services-inner">
<h3>1. Global Sourcing and Procurement</h3>
<p>We specialize in sourcing a diverse range of products from Pakistan and beyond. 
Our extensive network of trusted suppliers and manufacturers ensures that you 
receive the best quality products at competitive prices. Whether you're looking
 for raw materials or finished goods, we have the expertise to meet your procurement needs.</p>
 </div>
 <img src={image1} alt="image1" className="image1" />
 </div>



 <div className="services-1">
 <img src={image2} alt="image2" className="image2" />
<div className="services-inner">
<h3>2. Logistics and Supply Chain Management</h3>
<p>Our logistics team is dedicated to optimizing your supply 
chain for efficiency and reliability. From warehousing to
 transportation and distribution, we handle every aspect of
  the logistics process. Our goal is to ensure that your products 
  reach their destination on time and in perfect condition.
  </p>
  </div>
  </div>


  <div className="services-1">
  <div className="services-inner">
<h3>3. Quality Assurance and Inspection</h3>
<p>We prioritize quality in every step of the trading process.
 Our quality assurance team conducts rigorous inspections
  and testing to ensure that all products meet industry standards 
  and client specifications. We are committed to delivering products
   that exceed your expectations.</p>
   </div>
   <img src={image3} alt="image3" className="image3" />


   </div>



       </div> 
)


}