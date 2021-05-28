import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

const Nav = ({click}) => {
  return ( <div className={classes.Nav}>
      <NavItem click={click} url="/" exact>Home</NavItem>
      <NavItem click={click} url="/menu">Menu</NavItem>
      <NavItem click={click} url="/vacancies">Vacancies</NavItem>
      <NavItem click={click} url="/about">About</NavItem>
  </div> );
}
 
export default Nav;