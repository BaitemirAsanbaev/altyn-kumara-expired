import classes from "./Map.module.css";

const Map = () => {
  return ( <div className={classes.Map}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183.85646859515637!2d78.38430175567255!3d42.49785579934702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe5e3d768d570e350!2z0JDQu9GC0YvQvSDQmtGD0LzQsNGA0LA!5e0!3m2!1sru!2skg!4v1622704059122!5m2!1sru!2skg" width="500" height="300" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
  </div> );
}
 
export default Map;