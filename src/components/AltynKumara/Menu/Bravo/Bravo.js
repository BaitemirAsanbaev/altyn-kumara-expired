import { useSelector } from "react-redux";
import classes from "./Bravo.module.css";

const Bravo = () => {

  const data = useSelector(state => state.bravo.pizza)
  const output = Object.values(data).map((item) => {
    return (
      <div key={item.title_ru} className={classes.pizza_item}>
        <div> 
          <h2>{item.title_ru}</h2>
          <span>{item.composition_ru}</span>
          <span>{item.price}</span>
        </div>
        <div>
          <span> 30 см - {item.price_30} сом</span>
          <br/>
          <br/>
          <span> 40 см - {item.price_40} сом</span>
        </div>

      </div>
    )
  })

  return (<div className={classes.Bravo}>
    {output}
  </div>);
}

export default Bravo;