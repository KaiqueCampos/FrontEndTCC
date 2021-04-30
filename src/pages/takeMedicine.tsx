import {useApp } from '../Contexts/AppContexts';
import styles from '../styles/pages/takeMedicine.module.scss';

export default function Home() {
    const { medicineDayNotification } = useApp();

    medicineDayNotification();

    return (
        
            <div className='container'>
                <div className={styles.container}>
                    <div className={styles.titlePage}>
                        <div>
                            <img src="/img/icons/medicine.png" />
                            <p> Hora de tomar <br />remédio!</p>
                        </div>
                    </div>

                    <div className={styles.medicineContainer}>
                        <p>18:00</p>
                        <hr></hr>
                        <p>Dipirona</p>
                    </div>

                    <div className={styles.buttons}>
                        <button>
                            Não tomei
                    </button>
                        <button>
                            Tomei
                    </button>
                    </div>
                </div>
            </div>

    )
}
