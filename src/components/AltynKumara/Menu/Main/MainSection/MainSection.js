import { useState } from "react";
import MainItem from "../MainItem/MainItem";
import classes from "./MainSection.module.css"
import curtain from "../../../../../images/menu-images/curtain.svg"

const MainSection = ({ children, data }) => {

  const [show, setShow] = useState(false);




  return (
    <div onClick={() => {setShow(!show)}} className={classes.MainSection}>
      <div className={classes.clickDiv}>
        <h1>{children}</h1>
        <img
        alt="curtain"
        src={curtain}
        style={{transform: `rotate(${show ? "180" : "0"}deg)`}} />
      </div>
      {show ? <div className={classes.DishesList}>
        {Object.values(data).map((item) => {
          return (<>
            <MainItem
              key={item.title_ru}
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

