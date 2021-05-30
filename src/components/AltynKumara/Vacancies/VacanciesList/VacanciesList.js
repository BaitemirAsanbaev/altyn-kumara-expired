import classes from "./VacanciesList.module.css";
import waiter from "../../../../images/vacancies-images/waiter.svg"
import admin from "../../../../images/vacancies-images/admin.svg"
import chef from "../../../../images/vacancies-images/chef.svg"
import cleaner from "../../../../images/vacancies-images/cleaner.svg"
import { Link } from "react-router-dom";


const VacanciesList = () => {
  return ( <div className={classes.VacanciesList}>
    <Link to='/vacancies/waiter'>
        <div className={classes.Vcard}>
          <span>Официант</span>
          <img src={waiter}/>
        </div>
      </Link>
      <Link to='/vacancies/admin'>
        <div className={classes.Vcard}>
          <span>Администратор</span>
          <img src={admin}/>
        </div>
      </Link>
      <Link to='/vacancies/chef'>
        <div className={classes.Vcard}>
          <span>Повар</span>
          <img src={chef}/>
        </div>
      </Link>
      <Link to='/vacancies/cleaner'>
        <div className={classes.Vcard}>
          <span>Разнорабочий</span>
          <img src={cleaner}/>
        </div>
      </Link>
  </div> );
}
 
export default VacanciesList;