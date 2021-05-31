import classes from "./Home.module.css";
import Slider from "./Slider/Slider"
import Best from "./Best/Best"
import kumara_logo from "../../../images/kumara.png"

const Home = () => {
  return ( <div className={classes.Home}>
    <Slider/>
    <div className={classes.home}>
      <Best/>
      <div className={classes.info}>
        <div>
          <h2>Алтын</h2>
          <img alt='altyn' src={kumara_logo}/>
          <h2>Кумара</h2>
        </div>
        <div>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad earum eaque autem impedit laborum optio nesciunt omnis quibusdam consectetur nisi sequi suscipit maiores, numquam reprehenderit, eos itaque. Ex, vel voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad earum eaque autem impedit laborum optio nesciunt omnis quibusdam consectetur nisi sequi suscipit maiores, numquam reprehenderit, eos itaque. Ex, vel voluptatem. 
          </p>
        </div>
      </div>
    </div>
  </div> );
}
 
export default Home;