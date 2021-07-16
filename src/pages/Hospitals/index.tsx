import React from "react";
import Header from "../../Components/Header";
import Map from "../../Components/Map/Map";
import { useApp } from "../../hooks/useApp";
import { parseCookies } from "../../utils/parseCookies";
import styles from './styles.module.scss';

export default function Appointment(props) {

    const { getUserInformation } = useApp();
    getUserInformation(props.data);

    return (

        <div className={styles.container}>
            <Header backButtonColor='purple' />

            <Map />
        </div>
    );
};

export async function getServerSideProps({ req }) {
    //get token on cookies
    const { token } = parseCookies(req);

    // API connection
    const response = await fetch('http://localhost:3333/showUser', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });

    const {
        adress,
        age,
        cep,
        chronicDisease,
        height,
        phoneNumber,
        weight
    } = await response.json();

    return {
        props: {
            data: {
                adress: adress,
                age: age,
                cep: cep,
                chronicDisease: chronicDisease,
                height: height,
                phoneNumber: phoneNumber,
                weight: weight,
            }
        }
    }

}