import { Link } from "react-router-dom";
import classes from "./Vacancies.module.css";
import waiter from "../../../images/vacancies-images/waiter.svg"
import admin from "../../../images/vacancies-images/admin.svg"
import chef from "../../../images/vacancies-images/chef.svg"
import cleaner from "../../../images/vacancies-images/cleaner.svg"

const Vacancies = () => {
  return ( <div className={classes.Vacancies}>
    <h1>Вакансии</h1>
    <div className={classes.VacanciesDiv}>
      <Link to='/waiter'>
        <div className={classes.Vcard}>
          <span>Официант</span>
          <img src={waiter}/>
        </div>
      </Link>
      <Link to='/admin'>
        <div className={classes.Vcard}>
          <span>Администратор</span>
          <img src={admin}/>
        </div>
      </Link>
      <Link to='/chef'>
        <div className={classes.Vcard}>
          <span>Повар</span>
          <img src={chef}/>
        </div>
      </Link>
      <Link to='/cleaner'>
        <div className={classes.Vcard}>
          <span>Разнорабочий</span>
          <img src={cleaner}/>
        </div>
      </Link>
    </div>
  </div> );
}
 
export default Vacancies;