import classes from "./Bravo.module.css";
import bravo from "../../images/bravo-logo.png"

const Bravo = () => {
  return ( <div className={classes.Bravo}>
    <img alt='bravo-logo' src={bravo}/>
    <h1>BRAVO PIZZA</h1>
  </div> );
}
 
export default Bravo;