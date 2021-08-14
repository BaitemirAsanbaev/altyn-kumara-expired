import { useState } from "react";
import MainItem from "../MainItem/MainItem";
import classes from "./MainSection.module.css"

const MainSection = ({ children, data }) => {

  const [show, setShow] = useState(false);




  return (
    <div className={classes.MainSection}>
      <div  onClick={() => {setShow(!show)}} className={classes.clickDiv}>
        <h1>{children}</h1>
      </div>
      {show ? <div className={classes.DishesList}>
        {Object.values(data).map((item) => {
          return (<>
            <MainItem
              title={item.title_ru}
              composition={item.composition_ru}
              price={item.price}
              count={item.count}
              extra_info={item.extra_info}
              weight={item.weight}
              weight_ml={item.weight_ml} />
          </>
          )
        })}
      </div> : null}
    </div>
  )
}

export default MainSection;

