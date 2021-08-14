import { Route, Switch } from "react-router";
import About from "./About/About";
import classes from "./AltynKumara.module.css";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import Vacancies from "./Vacancies/Vacancies";
import NotFound from "../UI/NotFound/NotFound"
import Main from "./Menu/Main/Main";
import Bravo from "./Menu/Bravo/Bravo";

const AltynKumara = () => {
  return ( <div className={classes.AltynKumara}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/menu' component={Menu}/>
      <Route path='/menu/main' component={Main}/>
      <Route path='/menu/bravo' component={Bravo}/>
      <Route path='/vacancies' component={Vacancies}/>
      <Route path='/about' component={About}/>
      <Route path='/' component={NotFound}/>
    </Switch>
  </div> );
}
 
export default AltynKumara;