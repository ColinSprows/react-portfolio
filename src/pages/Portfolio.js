import React from 'react'
import Image1 from '../images/portfolio-image-1.jpg'
import Image2 from '../images/portfolio-image-2.jpg'
import Image3 from '../images/portfolio-image-3.jpg'
import Image4 from '../images/portfolio-image-4.jpg'
import '../styles/style.css';

const Portfolio = () => {
  return (
    <div
      style={{ 
      display: "flex", 
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      alignItems: "space-evenly",
      marginTop: "24px"
      }}
    >
      <a href="https://github.com/ColinSprows" className="a">
        <img src={Image1} alt="Image 1" style={{ width: "100%", height: "100%" }}/>
      </a>
      <a href="https://github.com/ColinSprows" className="a">
        <img src={Image2} alt="Image 2" style={{ width: "100%", height: "100%" }}/>
      </a>
      <a href="https://github.com/ColinSprows" className="a">
        <img src={Image3} alt="Image 3" style={{ width: "100%", height: "100%", marginTop: "48px" }}/>
      </a>
      <a href="https://github.com/ColinSprows" className="a">
        <img src={Image4} alt="Image 4" style={{ width: "100%", height: "100%", marginTop: "48px" }}/>
      </a>
      
    </div>
  )
}

export default Portfolio