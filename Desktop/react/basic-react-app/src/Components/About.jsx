import "./About.css"
import missionImage from '../assets/trade4.jpg'; 
import visionImage from '../assets/trade8.jpg'; 



export function About(){

    return (
<div className="about-outer">
<div className="about-intro">
    <h2>About</h2>
  <p>Shamaq traders, a gateway to trade, from Pakistan to all over the world our company is the 
        trust for trade. By collaborating with us, you can import best products and raw materials from 
        the most fertile land of the world.
    </p>
    </div> 
    <div className="about-vision">
   <div className="about-vision-inner">
     <h2>
        Our Vision
    </h2>
    <p>Our vision is to provide trustworthy products from Pakistan to
        all over the world.
    </p>
    </div>
    <img src={visionImage} alt="Our Vision" className="vision-image" />
    </div>
    <div className="about-mission">
    <img src={missionImage} alt="Our Vision" className="mission-image" />
    <div className="about-mission-inner"><h2>
        Our Mission
    </h2>
    <p>Our mission is to provide trustworthy products from Pakistan to
        all over the world.
    </p>
    </div>
    
    </div>
</div>
    )
}