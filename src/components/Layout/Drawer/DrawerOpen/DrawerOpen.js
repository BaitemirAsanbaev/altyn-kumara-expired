import classes from "./DrawerOpen.module.css";

const DrawerOpen = ({click}) => {
  console.log(click)
  return ( <div className={classes.DrawerOpen}>
    <div onClick={click} style={{cursor: "pointer"}}>clickme</div>
  </div> );
}
 
export default DrawerOpen;