import { useApp } from '../../hooks/useApp';
import { useRouter } from 'next/router';

import NoMedicines from '../NoMedicine';
import { Medicines } from '../Medicines';

import styles from './styles.module.scss'
import animate from "../../styles/animation.module.scss";
import { useEffect, useState } from 'react';
import { medicinesOnDay } from '../../utils/medicinesOnDay';
import moment from 'moment';
import { parseCookies } from '../../utils/parseCookies';
import { errorNotification } from '../../utils/ToastifyNotification';

type MedicinesData = {
    name: string;
    id: string;
    time: string;
    status: number;
    date?: string;
    initialDate?: string;
    finalDate?: string;
}

type MedicineOfWeekProps = {
    medicine: MedicinesData,
    daysWeek: string[];
}

type MedicinesOnDayData = {
    date: string
    id: number
    name: string
    status: number
    time: string
}

type MedicinesOnDayProps = MedicinesOnDayData[] | undefined

export function MedicinesOfWeek(props: MedicineOfWeekProps, { req }) {
    const [medicinesOnDay, setMedicinesOnDay] = useState<MedicinesOnDayProps>()

    const medicine = props.medicine;
    const daysWeek = props.daysWeek;

    const {
        getAllMedicinesOfDay,
    } = useApp();
    
    const today = getAllMedicinesOfDay(medicine);
    const router = useRouter();

    // Select link clicked and set this medicines on localStorage
    function setInformation() {
        document.querySelectorAll("a").forEach((a) => {
            a.onclick = (event) => {

                // Get index and name of day clicked
                const indexOfDayClicked = a.querySelector('#dayIndex').innerHTML
                const dayClicked = a.querySelector('span').innerHTML
                                
                // Put the medicines of this day in localStorage and go to MedicinesOfDay page 
                localStorage.setItem('medicines', JSON.stringify(medicine[Number(indexOfDayClicked)]));
                router.push(`/MedicineOfDay?day=${dayClicked}`)
            }
        })
    }

    // Check if the medicine has run out of time and has not been taken
    useEffect(() => {

        const time = moment(Date.now()).format("HH:mm");
        setMedicinesOnDay(medicine[Number(today)])

        medicinesOnDay !== undefined ? (

            medicinesOnDay.map(medicine => {

                // Convert time from string to integer
                var medicineTime = parseInt(medicine.time.replace(':', ''))
                var currentTime = parseInt(time.replace(':', ''))

                // Sends the new status of the forgotten drug to the database
                async function checkMedicineWasForgotten() {
                    if (medicineTime < currentTime && medicine.status === 2) {

                        const { token } = parseCookies(req)

                        // API connection
                        await fetch('http://localhost:3333/status', {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`
                            },
                            body: JSON.stringify({
                                medicineId: medicine.id,
                                status: 1,
                                date: moment().format('YYYY-MM-DD'),
                            })
                        });

                        errorNotification(`Você esqueceu de tomar ${medicine.name} às ${medicine.time}`)
                    }
                }

                checkMedicineWasForgotten()
            })
        ) : ''
    })

    return (
        <div className={styles.container}>

            {/* Show div of each day in week */}
            {daysWeek.map((days) => (

                <div
                    key={daysWeek.indexOf(days)}
                    className={`${styles.medicinesContainer} ${animate.up}`}
                    id={
                        daysWeek.indexOf(days) === today ? 'today' : ''
                            || daysWeek.indexOf(days) < today ? 'inactive' : ''
                    }
                >
                    <h3>{days}</h3>

                    {/* if no has medicine in this day, show <NoMedicines/> */}
                    {medicine[daysWeek.indexOf(days)].length > 0 ? (
                        <>
                            <div className={`${styles.medicine} ${animate.upSlow}`}>

                                {/* show each medicine of this day */}
                                {medicine[daysWeek.indexOf(days)].map((medicine) => (
                                    <Medicines
                                        medicine={medicine}
                                        hasDeleteButton={false}
                                    />
                                ))}

                            </div>

                            <a onClick={setInformation}>
                                <img className={styles.seeMoreBTN} src="/img/icons/seeMore.png" />
                                <span>{days}</span>
                                <span id='dayIndex'>{daysWeek.indexOf(days)}</span>
                            </a>
                        </>

                    ) : (
                        <NoMedicines />
                    )}

                </div>
            ))}

        </div>
    )
}