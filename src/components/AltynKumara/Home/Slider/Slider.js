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
  const [currentSlide, setCurrentSlide] = useState(0)

const slides = slideColors.length;
useEffect(()=>{
  setInterval(()=>{
    setCurrentSlide(
      currentSlide === slides - 1 ? 0 : currentSlide + 1
    )
  }, 10000)
}, [currentSlide, slides])

  return ( <div className={classes.Slider}>
    <div style={{backgroundImage: `url(${slideColors[currentSlide]})`}} className={classes.slide}></div>
    <div>
    </div>
  </div> );
}
 
export default Slider;