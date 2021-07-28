// import React, { Component } from 'react';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'; 
const path = require("path")

// const images =require('./images')
//path.join(__dirname, "../../public/exercise.html")
const data= [
  
   {image: 'carousel-images/axe-throwing.jpg', 
  //  caption:"Caption",
  //  description:"Description Here"
  },
  {image: 'carousel-images/arnold.gif'}, 

  {
    image: 'carousel-images/tugofwar.png', 
    // caption:"Caption",
    // description:"Description Here"
   },
   {
    image:'carousel-images/fourloko.jpeg', 
    // caption:"Four Loko",
    // description:"Description Here"
   },
   {image:'carousel-images/armwrestling.jpeg'},
   {image:'carousel-images/boxing.jpg'}
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data && data.map((slide) => {
        //  {console.dir(slide.image)}
        return (
          
          <Carousel.Item align="center">        
        <img
          className="d-block w-50"
          src={path.join(__dirname,`${slide.image}`)}
          alt="slider img"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default HomeCarousel;





// const Carousel = () => {
// return (
//     <div>
//         <h1>Carousel Inserted Here</h1>
//     </div>
// )
// }




// export default Carousel;