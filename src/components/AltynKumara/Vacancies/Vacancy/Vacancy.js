import axios from "axios";
import { useHistory } from "react-router";
import classes from "./Vacancy.module.css";

const Vacancy = ({ match }) => {
  const occupations = [];


  switch(match.params.id){
    case 'waiter':
      occupations.push(
        <select required name='occupation'>
          <option>Официант</option>
          <option>Раннер</option>
          <option>Хостес</option>
        </select>
      )
      break
    case 'admin':
      occupations.push(
        <select required name='occupation'>
          <option>Администратор</option>
          <option>Кассир</option>
        </select>
      )
      break
    case 'chef':
      occupations.push(
        <select required name='occupation'>
          <option>Повар универсал</option>
          <option>Шашлычник</option>
          <option>Салатник</option>
          <option>Суши-мастер</option>
          <option>Пиццейола</option>
        </select>
      )
      break
    case 'cleaner':
      occupations.push(
        <select required name='occupation'>
          <option>Посудомойщица</option>
          <option>Уборщица</option>
        </select>
      )
      break
  
  }

  const history = useHistory();


  function onSubmitCallback(event){
    const data = new FormData(event.target)
    event.preventDefault()

    axios.post('https://altyn-kumara-a0de6-default-rtdb.firebaseio.com/vacancies.json' ,{
      имя: data.get('first-name'),
      фамилия: data.get('last-name'),
      возраст: data.get('age'),
      должность: data.get('occupation'),
      стаж_работы: data.get('exp'),
      график_работы: data.get('graph'),
      номер_телефона: data.get('phone')
    })
    setTimeout(()=>{
      history.push('/')
    }, 1000)
  }


  return (
    <div className={classes.Vacancy}>
      <form onSubmit={onSubmitCallback}>
        <label htmlFor='first-name'>Имя</label>
        <input required type='text' name='first-name' />
        <label htmlFor='last-name'>Фамилия</label>
        <input required type='text' name='last-name' />
        <label htmlFor='age'>Возраст</label>
        <input required type='number' name='age' />
        <label htmlFor='occupation'>Должность</label>
        {occupations}
        <label htmlFor='exp'>Стаж работы</label>
        <select required name='exp'>
          <option>Без опыта</option>
          <option>Меньше года</option>
          <option>1-4 года</option>
          <option>Больше 4 лет</option>
        </select>
        <label htmlFor='graph'>График</label>
        <select required name='graph'>
          <option>3 дня в неделю</option>
          <option>4 дня в неделю</option>
          <option>5 дней в неделю</option>
        </select>
        <label htmlFor='phone'>Номер телефона</label>
        <input required type='phone' name='phone' />
        <button className={classes.submitBtn}>Отправить</button>
      </form>
    </div>
  );
}

export default Vacancy;