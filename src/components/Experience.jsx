import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';
import wolfexp1 from '../img/wolfexp1.jpeg';
import wolfexp2 from '../img/wolfexp2.jpeg';
import wolfexp3 from '../img/wolfexp3.jpeg';


const Experience = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3000  
  };

  return (
    <>
    <div id="experience" className="text-6xl font-thin text-center">
      <div className="flex gap-2 items-center justify-center">
<div>
Experience
</div>
<div>
  <a href="https://www.linkedin.com/" target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
</svg>
</a>
</div>
      </div>
         
    </div>
    <div className=" itesm-center font-thin text-xl p-14 pb-36">
    <Slider {...settings}>
      <div className="flex justify-center gap-6">
        <div>
        <img src={wolfexp1} height={400} width={400} alt="Slide 1" />
        </div>
        <div>
        SDE1 | Google (Jan 2024 - Present)
        </div>
      </div>
      <div className="flex justify-center gap-6  items-center">
      <div>
        <img src={wolfexp2} height={400} width={400} alt="Slide 2" />
        </div>
        <div>
        Self Employed | Forest (Feb 2023 - Dec 2023)
        </div>
      </div>
      <div className="flex justify-center gap-6  items-center"> 
      <div> 
        <img src={wolfexp3} height={400} width={400} alt="Slide 3" />
        </div>
        <div>
        SDE1 | Microsoft (Jan 2022 - Jan 2023)

        </div>
      </div>
    </Slider>
    </div>
    </>
  );
};

export default Experience;
