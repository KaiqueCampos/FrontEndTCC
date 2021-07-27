import Link from 'next/Link'
import styles from './styles.module.scss'

export function NewAppointmentReminderButton() {
    return (
        <Link
            href='/NewAppointmentReminder'
        >
            <button className={styles.container}>
                <img src='/img/icons/add.png' />
            </button>
        </Link>
    )
}