import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { parseCookies } from '../../utils/parseCookies'
import { errorNotification, sucessNotification } from '../../utils/ToastifyNotification'
import { AppointmentReminderButton } from '../AppointmentReminderButton'
import styles from './styles.module.scss'

type AppointmentReminderProps = {
    id: number;
    state: string;
    hospitalName: string;
    specialty: string;
    time: string;
    date: string;
    contactPhone: string
}

export function AppointmentReminder(props: AppointmentReminderProps, { req }) {

    const router = useRouter();

    async function handleDeleteAppointment(appointmentReminderId: number) {
        const { token } = parseCookies(req);

        // API connection
        const response = await fetch("http://localhost:3333/deleteAppointmentReminders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },

            body: JSON.stringify({
                appointmentReminderId: appointmentReminderId,
            }),
        });

        // login sucess or not
        if (response.status === 200) {
            sucessNotification("Lembrete de consulta deletado!")
            return router.push('/AppointmentsReminder');

        } else {
            errorNotification("Não foi possível deletar lembrete!")
        }
    }

    async function handleNotDoneAppointment(appointmentReminderId: number) {
        const { token } = parseCookies(req);

        // API connection
        const response = await fetch("http://localhost:3333/updateAppointmentReminders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },

            body: JSON.stringify({
                appointmentReminderId: appointmentReminderId,
                status: "notDone"
            }),
        });

        // login sucess or not
        if (response.status === 200) {
            sucessNotification("Consulta marcada como NÃO concluída")
            return router.push('/AppointmentsReminder');

        } else {
            errorNotification("Não foi possível alterar o estado da consulta")
        }
    }

    async function handleDoneAppointment(appointmentReminderId: number) {
        const { token } = parseCookies(req);

        // API connection
        const response = await fetch("http://localhost:3333/updateAppointmentReminders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },

            body: JSON.stringify({
                appointmentReminderId: appointmentReminderId,
                status: "done"
            }),
        });

        // login sucess or not
        if (response.status === 200) {
            sucessNotification("Consulta concluída")
            return router.push('/AppointmentsReminder');

        } else {
            errorNotification("Não foi possível alterar o estado da consulta")
        }
    }

    return (
        <div className={styles.container} id={props.state}>

            <div className={styles.appointmentState} id={props.state}>
                {
                    props.state === 'done'
                        ? 'Consulta concluída'
                        : (props.state === 'notDone' ? 'Consulta não concluída' : 'Em andamento...')
                }
            </div>

            <tr>
                <th>{props.hospitalName}</th>
                <th>{props.specialty}</th>
                <th>{props.time}</th>
                <th>{props.date}</th>
                <th>{props.contactPhone}</th>
            </tr>

            <div className={styles.AppointmentReminderButtons}>
                <AppointmentReminderButton
                    onClick={() => handleDeleteAppointment(props.id)}
                    color='var(--purple)'
                    legend='Deletar'
                />

                {props.state === 'loading' ? (
                    <>
                        <AppointmentReminderButton
                            onClick={() => handleNotDoneAppointment(props.id)}
                            color='var(--red)'
                            legend='Consulta Não Concluída'
                        />

                        <AppointmentReminderButton
                            onClick={() => handleDoneAppointment(props.id)}
                            color='var(--green)'
                            legend='Consulta Concluída'
                        />
                    </>
                ) : ''}
            </div>

        </div>
    )
}