import classes from "./Home.module.css";
import Slider from "./Slider/Slider"
import Best from "./Best/Best"

const Home = () => {
  return ( <div className={classes.Home}>
    <Slider/>
    <Best/>
  </div> );
}
 
export default Home;