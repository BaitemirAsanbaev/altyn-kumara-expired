import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.css";

const NavItem = ({ url, children, exact, click }) => {
  return (<div onClick={click} className={classes.NavItem}>
      <NavLink to={url} activeStyle={{color: "#ffdc23"}} exact={exact}>{children}</NavLink>
    </div>);
}

export default NavItem;