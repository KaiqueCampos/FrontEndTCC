import animate from '../../styles/animation.module.scss';
import styles from "./styles.module.scss";

export default function NoMedicines() {

  return (
    <a href="NewMedicine">
      <div className={`${styles.noMedicines} ${animate.upMoreSlow}`}>
        <img className={styles.noMedicineImage} src="img/icons/noMedicines.png" />
        <h2>Sem Medicamentos</h2>
      </div>
    </a>
  )
}