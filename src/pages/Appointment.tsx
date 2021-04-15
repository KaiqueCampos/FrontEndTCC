import React, { useState } from "react";
import Header from "../Components/header";
import Layout from "../Layout/Layout";
import styles from '../styles/pages/Appointment.module.css';
import animate from '../styles/animation/animation.module.css';
import titlePage from '../styles/Components/titlePage.module.css';
import AppointmentDescription from "../Components/AppointmentDescription";
import Head from "next/head";


const Appointment = () => {

    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <div className={styles.container}>
                <div className={styles.firstBackground}>
                    <Header />
                    <AppointmentDescription />
                </div>

                {/* <div className={styles.container2}>
               daohdaoihd
           </div> */}
            </div>

        </>
    );
};

export default Appointment;