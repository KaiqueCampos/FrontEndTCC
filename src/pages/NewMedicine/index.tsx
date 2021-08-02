import moment from "moment";
import Head from "next/Head";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import Header from "../../Components/Header";
import { TitlePage } from "../../Components/TitlePage";
import animate from '../../styles/animation.module.scss';
import { parseCookies } from "../../utils/parseCookies";
import { errorNotification, sucessNotification } from "../../utils/ToastifyNotification";
import styles from './styles.module.scss';

export default function Medicine({ req }) {

    const router = useRouter();
    const [initialDate, setInitialDate] = useState('');
    const [finalDate, setFinalDate] = useState('');
    const [name, setName] = useState('');
    const [dateButton, setDateButton] = useState(false);
    const [takeMedicineAt, setTakeMedicineAt] = useState('')

    // Get medicine 
    const medicineTime = []
    function getTime() {
        const container = document.querySelector("#timeDiv").querySelectorAll('input');
        for (var i = 0; i < container.length; i++) {
            medicineTime.push(container[i].value)
        }
    }

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        //Get Hours
        getTime();

        // Get token in cookies
        const { token } = parseCookies(req)

        // API connection
        const addMedicine = await fetch('http://localhost:3333/registerMedicine', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: name,
                initialDate: initialDate,
                finalDate: finalDate,
                time: medicineTime.toString(),
                // color: color
            })
        });

        const data = addMedicine;
        if (data.status === 200) {
            sucessNotification("Medicamento adicionado!")

            // Get token
            return router.push('/MedicinesOfWeek');

        } else {
            errorNotification("Não foi possível cadastrar este Medicamente, Tente Novamente...")
        }
    }

    function dateState() {
        setDateButton(!dateButton)
    }

    useEffect(() => {

        const element = document.getElementById('dateButton')
        const circleElement = document.getElementById('circleButton')
        const dateContainer = document.getElementById('date')

        if (dateButton) {

            element.style.background = "var(--purple)"
            element.style.border = "2px solid var(--purple)"

            circleElement.style.right = "0"
            circleElement.style.background = "var(--green)"

            dateContainer.style.display = "block"
            dateContainer.style.display = "flex"


        } else {

            element.removeAttribute('style');
            circleElement.removeAttribute('style');
            dateContainer.removeAttribute('style');

            var currentDate = moment().format("YYYY-MM-DD");
            setInitialDate(currentDate)
            setFinalDate(currentDate);
        }

    }, [dateButton])

    return (
        <div id='themeBackground'>

            <Head>
                <title>Adicionar medicamento | Saúde em Mãos</title>
            </Head>

            <div className={styles.container}>
                <Header />

                <TitlePage
                    titleImageIcon='/img/icons/medicine.png'
                    title='Adicionar Remédio'
                />

                <form onSubmit={submit} className={styles.addMedicine}>
                    <div id="timeDiv" className={`${styles.hoursContainer} ${animate.up}`}>
                        <h2>Adicione um horário :</h2>
                        <input type='time' required />
                    </div>

                    <div className={`${styles.specificDate} ${animate.upSlow}`}>
                        <h3 className={styles.legend}>Data Específica</h3>
                        <button id="dateButton" onClick={dateState} type='button'>
                            <div id="circleButton"></div>
                        </button>
                    </div>

                    <div id="date" className={`${styles.date} ${animate.upSlow}`}>
                        <div>
                            <h4>Inicío</h4>
                            <input
                                type="date"
                                name='initialDate'
                                placeholder='Data de início:'
                                onChange={e => setInitialDate(e.target.value)}
                            />
                        </div>

                        <div>
                            <h4>Término</h4>
                            <input
                                type="date"
                                name='finalDate'
                                placeholder='Data de Término:'
                                onChange={e => setFinalDate(e.target.value)}
                            />
                        </div>

                    </div>

                    <input
                        onChange={e => setName(e.target.value)}
                        className={animate.upSlow}
                        type='text'
                        name='medicineName'
                        placeholder='Nome do Remédio:'
                        required
                    />

                    <button type='submit' className={`${styles.submitButton} ${animate.upMoreSlow}`}>
                        <img src='/img/icons/add.png' />
                        Adicionar novo remédio
                    </button>
                </form>
            </div>
        </div>
    );
};