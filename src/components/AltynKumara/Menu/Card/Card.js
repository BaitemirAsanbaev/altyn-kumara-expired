import classes from "./Card.module.css";
import mainimg from "../../../../images/menu-images/mainimg.jpg"
import bravoimg from "../../../../images/menu-images/bravoimg.jpg"
import { Link } from "react-router-dom";

const Card = ({ children, type }) => {

  let bgimg = null;

  if (type === "main") {
    bgimg = mainimg;
  }
  if (type === "bravo") {
    bgimg = bravoimg;
  }
  return (<Link to = {type === "main" ? "menu/main" : "menu/bravo"}>
    <div style={{ backgroundImage: `url(${bgimg})` }} className={classes.Card}>
      <div>
        <h1>{children}</h1>
      </div>
    </div>
  </Link>);
}

export default Card;