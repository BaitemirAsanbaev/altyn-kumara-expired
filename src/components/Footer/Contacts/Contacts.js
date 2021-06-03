import classes from "./Contacts.module.css";
import insta from "../../../images/contacts-images/insta.svg"
import fb from "../../../images/contacts-images/facebook.svg"
import tripadvisor from "../../../images/contacts-images/trip-adv.svg"
import wsp from "../../../images/contacts-images/whatsapp.svg"
import tg from "../../../images/contacts-images/tg.svg"

const Contacts = () => {
  return ( <div className={classes.Contacts}>
    <h3>Свяжитесь с нами</h3>
    <ul>
      <li>Адресс:г.Каракол ул.Пржевальского 105а</li>
      <li>Телефон: +996 556-255-258</li>
      <li>Телефон: +996 706-255-258</li>
      <li>Email: altyn.kumara.dev@gmail.com</li>
    </ul>
    <div className={classes.links}>
      <a rel="noreferrer" href='https://www.instagram.com/altyn_kumara/' target='_blank'><img alt='instagram' src={insta}/></a>
      <a rel="noreferrer" href='https://www.facebook.com/AltynKumara' target='_blank'><img alt='facebook' src={fb}/></a>
      <a rel="noreferrer" href='https://www.tripadvisor.ru/Restaurant_Review-g815340-d13313936-Reviews-Altyn_Kumara-Karakol_Issyk_Kul_Province.html' target='_blank'><img alt='tripadvisor' src={tripadvisor}/></a>
      <a rel="noreferrer" href='https://google.com' target='_blank'><img alt='whatsapp' src={wsp}/></a>
      <a rel="noreferrer" href='https://google.com' target='_blank'><img alt='telegram' src={tg}/></a>
    </div>

  </div> );
}
 
export default Contacts;