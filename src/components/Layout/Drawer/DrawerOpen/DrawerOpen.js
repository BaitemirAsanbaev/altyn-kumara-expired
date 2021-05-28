import classes from "./DrawerOpen.module.css";

const DrawerOpen = ({click}) => {
  console.log(click)
  return ( <div onClick={click} className={classes.DrawerOpen}>
      <div></div>
      <div></div>
      <div></div>
  </div> );
}
 
export default DrawerOpen;