import { useEffect, useState } from "react";
import classes from "./Slider.module.css";
import image1 from "../../../../images/slider-images/image1.png";
import image2 from "../../../../images/slider-images/image2.png";
import image3 from "../../../../images/slider-images/image3.jpg";

const Slider = () => {


  const [currentSlide, setCurrentSlide] = useState(1);

  let move = '0px'
  
  switch (currentSlide) {
    case 1:
      move = '0px'
      break;
    case 2:
      move = '-100%'
      break;
    case 3:
      move = '-200%'
      break;
    default:
      move = '0px'
      break;
  }
  if(currentSlide === 4){
    setCurrentSlide(1)
  }
  if(currentSlide < 1){
    setCurrentSlide(3)
  }




  return ( <div className={classes.Slider}>
    <div style={{transform: `translateX(${move})`}} className={classes.slides}>
      <div style={{backgroundImage: `url(${image1})`}}></div>
      <div style={{backgroundImage: `url(${image2})`}}></div>
      <div style={{backgroundImage: `url(${image3})`}}></div>
    </div>
    <div className={classes.sliderBtns}>
      <button onClick={()=> setCurrentSlide(currentSlide - 1)} className={classes.sliderBtn}>{'<'}</button>
      <button onClick={()=> setCurrentSlide(currentSlide + 1)} className={classes.sliderBtn}>{'>'}</button>
    </div>
  </div> );
}
 
export default Slider;