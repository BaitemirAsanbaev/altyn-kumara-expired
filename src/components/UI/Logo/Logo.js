import classes from "./Logo.module.css";
import logo from "../../../images/kumara.png"

const Logo = () => {
  return ( <div className={classes.Logo}>
    <img src={logo} className={classes.logo}/>
    <h1 className={classes.title}>Алтын Кумара</h1>
  </div> );
}
 
export default Logo;