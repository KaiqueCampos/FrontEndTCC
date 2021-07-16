import { AppointmentReminderButton } from '../AppointmentReminderButton'
import styles from './styles.module.scss'

type AppointmentReminderProps = {
    state: string;
    hospitalName: string;
    specialty: string;
    time: string;
    date: string;
    contactPhone: string
}

export function AppointmentReminder(props: AppointmentReminderProps) {
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
                    color='var(--purple)'
                    function='Delete'
                    legend='Deletar'
                />

                {props.state === 'loading' ? (
                    <>
                        <AppointmentReminderButton
                            color='var(--red)'
                            function='NotDone'
                            legend='Consulta Não Concluída'
                        />

                        <AppointmentReminderButton
                            color='var(--green)'
                            function='Done'
                            legend='Consulta Concluída'
                        />
                    </>
                ) : ''}
            </div>

        </div>
    )
}