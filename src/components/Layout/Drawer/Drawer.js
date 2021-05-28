import Nav from "../../Nav/Nav";
import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./Drawer.module.css";

const Drawer = ({closeDrawer, open}) => {
  const drawerClasses = [
    classes.content,
    open ? classes.open : classes.close
  ];
  console.log(open)

  return ( <div className={classes.Drawer}>
    <Backdrop show={open} click={closeDrawer}/>
    <div className={drawerClasses.join(" ")}>
      <Nav click={closeDrawer}/>
    </div>
  </div> );
}
 
export default Drawer;