import Nav from "../../Nav/Nav";
import Logo from "../../UI/Logo/Logo";
import classes from "./Toolbar.module.css";
import DrawerOpen from "../Drawer/DrawerOpen/DrawerOpen"

const Toolbar = ({openDrawer}) => {
  return ( <div className={classes.Toolbar}>
    <Logo/>
    <nav>
      <Nav/>
    </nav>
    <DrawerOpen click={openDrawer}/>
  </div> );
}
 
export default Toolbar;