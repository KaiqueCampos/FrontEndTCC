import animate from '../styles/animation/animation.module.css';
import styles from "../styles/pages/Medicines.module.css";

export default function NoMedicines() {

  return (
    <div className={`${styles.noMedicines} ${animate.upMoreSlow}`}>
      <a href="addMedicine"><img src="img/icons/noMedicines.png" /></a>
      <h2>Sem remédios hoje :</h2>
    </div >

  )
}