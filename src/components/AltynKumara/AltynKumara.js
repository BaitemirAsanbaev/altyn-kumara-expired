import { Route, Switch } from "react-router";
import About from "./About/About";
import classes from "./AltynKumara.module.css";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import Vacancies from "./Vacancies/Vacancies";
import NotFound from "../UI/NotFound/NotFound"

const AltynKumara = () => {
  return ( <div className={classes.AltynKumara}>
    AltynKumara
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/menu' component={Menu}/>
      <Route path='/vacancies' component={Vacancies}/>
      <Route path='/about' component={About}/>
      <Route path='/' component={NotFound}/>
    </Switch>
  </div> );
}
 
export default AltynKumara;