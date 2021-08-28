import { useSelector } from "react-redux";
import classes from "./Main.module.css";
import MainSection from "./MainSection/MainSection";

const Main = () => {

  const data = useSelector(state => state.main)

  return (<div className={classes.Main}>
    <MainSection data={data.salads}>Салаты</MainSection>
    <MainSection data={data.barbecue}>Шашлыки</MainSection>
    <MainSection data={data.steak}>Стейки</MainSection>
    <MainSection data={data.fryer}>Жаровня</MainSection>
    <MainSection data={data.sushi}>Суши</MainSection>
    <MainSection data={data.refreshments}>Закуски</MainSection>
    <MainSection data={data.first_dishes}>Первые блюда</MainSection>
    <MainSection data={data.pancakes}>Блины</MainSection>
    <MainSection data={data.chicken_dishes}>Блюда из курицы</MainSection>
    <MainSection data={data.main_dishes}>Вторые блюда</MainSection>
    <MainSection data={data.coffee}>Кофе</MainSection>
    <MainSection data={data.desserts}>Дессерты</MainSection>

  </div>);
}

export default Main;