import styles from './styles.module.scss'

type AppointmentReminderButtonProps = {
    color: string;
    function: 'Delete' | 'Done' | 'NotDone';
    legend: string;
}

export function AppointmentReminderButton(props: AppointmentReminderButtonProps) {

    function ButtonFuntion(props: 'Delete' | 'Done' | 'NotDone'){
        
        if (props === 'Delete') {
            console.log('Delete function')
        }

        if (props === 'Done') {
            console.log('Done function')
        }

        if (props === 'NotDone') {
            console.log('NotDone function')
        }
    }

    return (
        <button
            onClick={() => ButtonFuntion(props.function)}
            className={styles.container}
            style={{ background: `${props.color}` }}
        >
            {props.legend}
        </button>
    )
}