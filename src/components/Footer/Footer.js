import classes from "./Footer.module.css";
import Map from "./Map/Map"
import Contacts from "./Contacts/Contacts"

const Footer = () => {
  return ( <div className={classes.Footer}>
    <Contacts/>
    <Map/>
  </div> );
}
 
export default Footer;