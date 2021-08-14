import Card from "./Card/Card";
import classes from "./Menu.module.css";
import MenuInfo from "./MenuInfo/MenuInfo";

const Menu = () => {
  return (<div className={classes.Menu}>
    <MenuInfo />
    <div className={classes.cards}>
    <Card type="main">Основное меню</Card>
    <Card type="bravo">Bravo Pizza</Card>
    </div>
  </div>);
}

export default Menu;