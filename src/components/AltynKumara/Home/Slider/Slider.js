import { useEffect, useState } from "react";
import classes from "./Slider.module.css";
import image1 from "../../../../images/slider-images/image1.png";
import image2 from "../../../../images/slider-images/image2.png";
import image3 from "../../../../images/slider-images/image3.jpg";

const Slider = () => {

  const slideColors = [
    image1,
    image2,
    image3
  ]
  let i = 0
  const [currentSlide, setCurrentSlide] = useState(slideColors[i])

useEffect(()=>{
  setInterval(()=>{
    if(i === slideColors.length - 1){
      i = -1;
    }
    i++
    setCurrentSlide(slideColors[i])
  }, 10000)
}, [])

  return ( <div className={classes.Slider}>
    <div style={{backgroundImage: `url(${currentSlide})`}} className={classes.slide}></div>
    <div>
    </div>
  </div> );
}
 
export default Slider;