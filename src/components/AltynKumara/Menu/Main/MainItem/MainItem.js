import classes from "./MainItem.module.css";

const MainItem = ({ title, composition, price, count, extra_info, weight, weight_ml }) => {

  return (<div className={classes.MainItem}>
    <div className={classes.d_title}>
      <h2>{title ? title : null}</h2>
      <span>{composition ? composition : null}</span>
      <span>{extra_info ? extra_info : null}</span>
    </div>
    <div className={classes.d_info}>
      <span>{price ? price + " сом" : null}</span>
      <span>{count ? typeof (count) === 'object' ? count[0] + " / " + count[1] + " шт" : count + " шт" : null}</span>
      <span>{weight ? typeof (weight) === 'object' ? weight[0] + "кг / " + weight[1] + "кг" : weight + " гр" : null}</span>
      <span>{weight_ml ? weight_ml + " мл" : null}</span>
    </div>
  </div>);
}

export default MainItem;