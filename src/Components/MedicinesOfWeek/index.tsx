import { useApp } from '../../hooks/useApp';
import { useRouter } from 'next/router';

import NoMedicines from '../NoMedicine';
import { Medicines } from '../Medicines';

import styles from './styles.module.scss'
import animate from "../../styles/animation.module.scss";

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

export function MedicinesOfWeek(props: MedicineOfWeekProps) {
    const medicine = props.medicine;
    const daysWeek = props.daysWeek;

    const {
        getAllMedicinesOfDay,
    } = useApp();

    const today = getAllMedicinesOfDay(medicine);

    const router = useRouter();

    function setInformation() {
        // Select link clicked and set this medicines on localStorage
        document.querySelectorAll("a").forEach((a) => {
            a.onclick = (event) => {
                localStorage.setItem('medicines', JSON.stringify(medicine[Number(today)]));
                const dayClicked = a.querySelector('span').innerHTML
                router.push(`/MedicineOfDay?day=${dayClicked}`)
            }
        })
    }

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