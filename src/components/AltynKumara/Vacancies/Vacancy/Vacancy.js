import classes from "./Vacancy.module.css";

const Vacancy = ({ match }) => {
  return (
    <div className={classes.Vacancy}>
      <form>
        <label htmlFor='first-name'>Имя</label>
        <input required type='text' name='name' />
        <label htmlFor='second-name'>Фамилия</label>
        <input required type='text' name='name' />
        <label htmlFor='age'>Возраст</label>
        <input required type='number' name='age' />
        <label htmlFor='occupation'>Должность</label>
        <select required name='occupation'>
          <option>/-/-/-/-/-/-/-/</option>
          <option>-</option>
          <option>-</option>
        </select>
        <label htmlFor='exp'>Стаж работы</label>
        <select required name='exp'>
          <option>/-/-/-/-/-/-/-/</option>
          <option>-</option>
          <option>-</option>
        </select>
        <label htmlFor='graph'>График</label>
        <select required name='graph'>
          <option>/-/-/-/-/-/-/-/</option>
          <option>-</option>
          <option>-</option>
        </select>
        <label htmlFor='phone'>Номер телефона</label>
        <input required type='phone' name='phone' />
        <button className={classes.submitBtn}>Отправить</button>
      </form>
    </div>
  );
}

export default Vacancy;