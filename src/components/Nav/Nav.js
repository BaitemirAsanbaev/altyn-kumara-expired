import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

const Nav = ({click}) => {
  return ( <div className={classes.Nav}>
      <NavItem click={click} url="/" exact>Главная</NavItem>
      <NavItem click={click} url="/menu">Меню</NavItem>
      <NavItem click={click} url="/vacancies">Вакансии</NavItem>
      <NavItem click={click} url="/about">О нас</NavItem>
  </div> );
}
 
export default Nav;