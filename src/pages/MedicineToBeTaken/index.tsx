import moment from 'moment';
import { useRouter } from 'next/router';
import { useApp } from '../../hooks/useApp';
import animate from '../../styles/animation.module.scss';
import { parseCookies } from '../../utils/parseCookies';
import styles from './styles.module.scss';

export default function MedicineToBeTaken({ req }) {

    const { medicineToBeTaken } = useApp()

    // Variables
    const router = useRouter();

    // true -> play audio | false -> stop audio
    function setPlayingState(state: boolean) {
        return;
    }

    setPlayingState(true);


    // Send Status to API
    async function submit(statusMedicine: number) {

        // Get token in cookies
        const { token } = parseCookies(req)

        // API connection
        const response = await fetch('http://localhost:3333/status', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                medicineId: medicineToBeTaken?.id,
                status: statusMedicine,
                date: moment().format('YYYY-MM-DD'),
            })
        });

        // Stop alarm and go to Medicines page
        setPlayingState(false);
        router.push('/MedicinesOfWeek')
    }

    return (

        <div id='themeBackground'>
            <div className={`${styles.container} ${animate.up}`}>
                <div className={styles.titlePage}>
                    <div>
                        <img src="/img/icons/medicine.png" />
                        <p> Hora de tomar <br />remédio!</p>
                    </div>
                </div>

                <div className={`${styles.medicineContainer} ${animate.upSlow}`}>
                    <p>{medicineToBeTaken?.time}</p>
                    <hr></hr>
                    <p>{medicineToBeTaken?.name}</p>
                </div>

                <div className={`${styles.buttons} ${animate.upMoreSlow}`}>
                    <button onClick={() => submit(1)}>
                        Não tomei
                    </button>
                    <button onClick={() => submit(0)}>
                        Tomei
                    </button>
                </div>
            </div>

            <audio id="timer-beep"
                autoPlay
                onPlay={() => setPlayingState(true)}
                onPause={() => setPlayingState(false)}
                src="/alarm.mp3"
            />
        </div>
    )
}