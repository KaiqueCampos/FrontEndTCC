import React from "react";
import { AppointmentReminder } from "../../Components/AppointmentReminder";
import Header from "../../Components/Header";
import { parseCookies } from "../../utils/parseCookies";
import styles from "./styles.module.scss";

type AppointmentReminderData = {
    id: number;
    hospitalName: string;
    specialty: string;
    day: string;
    time: string;
    contactPhone: string;
    status: string;
}

type AppointmentReminderPageProps = {
    data: AppointmentReminderData[]
}


export default function AppointmentReminderPage(props: AppointmentReminderPageProps) {

    return (
        <div id="themeBackground">
            <div className={styles.container}>
                <Header />

                <div className={`${styles.appointmentReminders}`}>

                    {props.data.map(appointmentReminder => (
                        <AppointmentReminder
                            key={appointmentReminder.id}
                            id={appointmentReminder.id}
                            state={appointmentReminder.status}
                            hospitalName={appointmentReminder.hospitalName}
                            specialty={appointmentReminder.specialty}
                            time={appointmentReminder.time}
                            date={appointmentReminder.day}
                            contactPhone={appointmentReminder.contactPhone}
                        />
                    ))}

                </div>

            </div>
        </div>
    );
};

export async function getServerSideProps({ req }) {
    // Get token in cookies
    const token = parseCookies(req).token;

    // API connection
    const response = await fetch('http://localhost:3333/showAppointmentReminders', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ` Bearer ${token}`
        },
    });

    const data = await response.json();

    return {
        props: {
            data: data
        },
    }
}
