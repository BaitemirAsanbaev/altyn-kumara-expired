import { Route } from "react-router-dom";
import classes from "./Vacancies.module.css";
import VacanciesList from "./VacanciesList/VacanciesList";
import Vacancy from "./Vacancy/Vacancy";


const Vacancies = ({match}) => {
  return ( <div className={classes.Vacancies}>
    <h1>Вакансии</h1>
      {match.isExact ? <VacanciesList/> : <Route path='/vacancies/:id' component={Vacancy}/>}
  </div> );
}
 
export default Vacancies;