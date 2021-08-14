import classes from "./MenuInfo.module.css";

const MenuInfo = () => {
  return (<div className={classes.MenuInfo}>
    <h2>Уважаемые гости</h2>

    <span>Разрешается приносить с собой только:</span>
    <ul>
      <li>сладости</li>
      <li>фрукты</li>
    </ul>

    <span>Строго запрещается приносить с собой:</span>
    <ul>
      <li>хлеб, боорсок</li>
      <li>салаты, еду, закуски</li>
      <li>соки, напитки, пиво</li>
      <li>спиртные напитки</li>
      <li>вино, шампанское</li>
    </ul>

    <h2 className={classes.serv}>Обслуживание - 15%</h2>
    <h3>Мы работаем с 10:00 до 22:00<br />
      Воскресенье с 9:00 до 21:00</h3>
  </div>);
}

export default MenuInfo;