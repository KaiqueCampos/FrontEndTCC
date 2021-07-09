import moment from 'moment';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss'

export function MedicineSpecificDateButton() {

    const [initialDate, setInitialDate] = useState('');
    const [finalDate, setFinalDate] = useState('');
    const [name, setName] = useState('');
    const [dateButton, setDateButton] = useState(false);


    function dateState() {
        setDateButton(!dateButton)
    }

    useEffect(() => {

        const element = document.getElementById('dateButton')
        const circleElement = document.getElementById('circleButton')
        const dateContainer = document.getElementById('date')

        if (dateButton) {

            element.style.background = "var(--purple)"
            element.style.border = "2px solid var(--purple)"

            circleElement.style.right = "0"
            circleElement.style.background = "var(--green)"

            dateContainer.style.display = "block"
            dateContainer.style.display = "flex"


        } else {

            element.removeAttribute('style');
            circleElement.removeAttribute('style');
            dateContainer.removeAttribute('style');

            var currentDate = moment().format("YYYY-MM-DD");
            setInitialDate(currentDate)
            setFinalDate(currentDate);
        }

    }, [dateButton])

    return (
        <div className={`${styles.specificDate}`}>
            <h3 className={styles.legend}>Data Específica</h3>
            <button id="dateButton" onClick={dateState} type='button'>
                <div id="circleButton"></div>
            </button>
        </div>
    )
}

// ${animate.upSlow}