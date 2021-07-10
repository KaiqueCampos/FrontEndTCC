import styles from './styles.module.scss'
import animate from "../../styles/animation.module.scss";
import { errorNotification, sucessNotification } from '../../utils/ToastifyNotification';
import { useRouter } from 'next/router';

type MedicinesData = {
    name: string;
    id: number;
    time: string;
    status: number;
    date?: string;
    initialDate?: string;
    finalDate?: string;
}

type MedicinesProps = {
    medicine: MedicinesData,
    hasDeleteButton: boolean;
}

export function Medicines(props: MedicinesProps) {
    const router = useRouter();

    async function deleteMedicine(medicineId: number) {

        // API connection
        const response = await fetch("http://localhost:3333/deleteMedicine", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                medicineId: medicineId,
            }),
        });

        // login sucess or not
        if (response.status === 200) {
            // Set token
            sucessNotification("Remédio Deletado com sucesso")
            return router.push('/MedicinesOfWeek');

        } else {
            errorNotification("Email ou senha incorretos, tente novamente...")
        }
    }

    return (
        <div className={`${styles.container} ${animate.upMoreSlow}`}
            key={props.medicine.id}
            id={props.medicine.status === 1 ? 'noTaken' : props.medicine.status === 0 ? 'taken' : ''}
        >
            <p>{props.medicine.time}</p>
            <hr></hr>
            <p>{props.medicine.name}</p>
            {
                props.hasDeleteButton
                    ? <button onClick={() => deleteMedicine(props.medicine.id)}><img src='img/icons/delete.jpg' /></button>
                    : ''
            }
        </div>
    )
}