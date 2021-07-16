import React from "react";
import { AppointmentReminder } from "../../Components/AppointmentReminder";
import Header from "../../Components/Header";
import styles from "./styles.module.scss";

const History = () => {

    return (
        <div id="themeBackground">
            <div className={styles.container}>
                <Header />
                
                <div className={`${styles.appointmentReminders}`}>
                    <AppointmentReminder
                        state='loading'
                        hospitalName='Hospital Family'
                        specialty='Clínico Geral'
                        time='15:45'
                        date='20/07/2020'
                        contactPhone='(11) 95810-1802'

                    />

                    <AppointmentReminder
                        state='loading'
                        hospitalName='Hospital Family'
                        specialty='Clínico Geral'
                        time='15:45'
                        date='20/07/2020'
                        contactPhone='(11) 95810-1802'
                    />

                    <AppointmentReminder
                        state='loading'
                        hospitalName='Hospital Family'
                        specialty='Clínico Geral'
                        time='15:45'
                        date='20/07/2020'
                        contactPhone='(11) 95810-1802'
                    />

                    <AppointmentReminder
                        state='loading'
                        hospitalName='Hospital Family'
                        specialty='Clínico Geral'
                        time='15:45'
                        date='20/07/2020'
                        contactPhone='(11) 95810-1802'
                    />

                    <AppointmentReminder
                        state='loading'
                        hospitalName='Hospital Family'
                        specialty='Clínico Geral'
                        time='15:45'
                        date='20/07/2020'
                        contactPhone='(11) 95810-1802'
                    />

                    <AppointmentReminder
                        state='loading'
                        hospitalName='Hospital Family'
                        specialty='Clínico Geral'
                        time='15:45'
                        date='20/07/2020'
                        contactPhone='(11) 95810-1802'
                    />

                    <AppointmentReminder
                        state='done'
                        hospitalName='Hospital Family'
                        specialty='Clínico Geral'
                        time='15:45'
                        date='20/07/2020'
                        contactPhone='(11) 95810-1802'
                    />

                    <AppointmentReminder
                        state='notDone'
                        hospitalName='Hospital Family'
                        specialty='Clínico Geral'
                        time='15:45'
                        date='20/07/2020'
                        contactPhone='(11) 95810-1802'
                    />
                </div>

            </div>
        </div>
    );
};

export default History;
