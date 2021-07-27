import { useRouter } from "next/router";
import React, { SyntheticEvent } from "react";
import { useState } from "react";
import Header from "../../Components/Header";
import { parseCookies } from "../../utils/parseCookies";
import { errorNotification, sucessNotification } from "../../utils/ToastifyNotification";
import styles from "./styles.module.scss";

export default function NewAppointmentReminder({ req }) {

    const [hospitalName, setHospitalName] = useState('')
    const [specialty, setSpecialty] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const router = useRouter();

    async function submit(e: SyntheticEvent) {
        e.preventDefault();

        // Get token in cookies
        const { token } = parseCookies(req)

        // API connection
        const addMedicine = await fetch('http://localhost:3333/newAppointmentReminder', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                hospitalName: hospitalName,
                specialty: specialty,
                day: date,
                time: time,
                contactPhone: phoneNumber,
            })
        });

        const data = addMedicine;
        if (data.status === 200) {
            sucessNotification("Lembrete criado!")

            // Get token
            return router.push('/AppointmentsReminder');

        } else {
            errorNotification("Não foi possível criar lembrete!")
        }
    }

    return (
        <div id="themeBackground">
            <div className={styles.container}>
                <Header />

                <form onSubmit={submit}>
                    <input
                        type="text"
                        placeholder="Nome do hospital/clínica: "
                        onChange={event => setHospitalName(event.target.value)}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Especialidade: "
                        onChange={event => setSpecialty(event.target.value)}
                        required
                    />


                    <div className={styles.dateAndTimeInputContainer}>
                        <div className={styles.timeContainer}>
                            <h3>Horário da consulta </h3>
                            <input
                                type='time'
                                onChange={event => setTime(event.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.dateContainer}>
                            <h3>Data da consulta </h3>
                            <input
                                type="date"
                                onChange={event => setDate(event.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <input
                        type="text"
                        placeholder="Número de telefone:"
                        onChange={event => setPhoneNumber(event.target.value)}
                        required
                    />

                    <button type="submit">
                        Adicionar lembrete
                    </button>

                </form>
            </div>
        </div>
    );
};