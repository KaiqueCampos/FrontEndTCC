import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

type AppointmentReminderButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    color: string;
    legend: string;
}

export function AppointmentReminderButton(props: AppointmentReminderButtonProps) {

    return (
        <button
            className={styles.container}
            style={{ background: `${props.color}` }}
            {...props}
        >
            {props.legend}
        </button>
    )
}