// import React, { Component } from 'react';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'; 


const data = [
  {
   image: require('../components/images/armwrestling.jpeg'), 
   caption:"Caption",
   description:"Description Here"
  },
  {
    image:require('../components/images/tugofwar.png'), 
    caption:"Caption",
    description:"Description Here"
   },
   {
    image:require('../components/images/fourloko.jpeg'), 
    caption:"Caption",
    description:"Description Here"
   } 
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
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