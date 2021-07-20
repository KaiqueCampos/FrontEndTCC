import React from "react";
import Header from "../../Components/Header";
import Map from "../../Components/Map/Map";
import styles from './styles.module.scss';

export default function Appointment() {

    return (

        <div className={styles.container}>
            <Header backButtonColor='purple' />

            <Map />
        </div>
    );
};