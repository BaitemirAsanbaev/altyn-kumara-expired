import { Link } from "react-router-dom";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return ( <div className={classes.NotFound}>
    <div>
      <h1>Страница не найдена</h1>
      <span>Проверьте URL адресс</span>
      <Link to="/">На главную страницу</Link>
    </div>
  </div> );
}
 
export default NotFound;