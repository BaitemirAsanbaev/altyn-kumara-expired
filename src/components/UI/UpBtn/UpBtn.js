import upbtn from "../../../images/up-btn.svg"
import classes from "./UpBtn.module.css"

 const UpBtn = () =>{
  return(
    <div onClick={()=>{window.scroll(0, 0)}} className={classes.UpBtn}>
      <img alt="scroll top" src={upbtn}/>
    </div>
  )
}

export default UpBtn;