import React, { useState } from "react";
import Layout from "../Layout/Layout";
import titlePage from '../styles/Components/titlePage.module.css';
import styles from '../styles/pages/MedicineDay.module.css';
import animate from '../styles/animation/animation.module.css';
import Header from "../Components/header";

const MedicineDay = () => {
    //Variables
    const [data, setData] = useState([]);
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");

    async function teste() {

        // Get token in LocalStorage
        const token = localStorage.getItem('token')

        // API connection
        const indexLogged = await fetch('http://localhost:3333/medicine', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        // Get JSON information and save in variables line (7-9)
        const indexInformationJSON = await indexLogged.json();
        return setData(indexInformationJSON);
    }

    console.log(data)

    return (
        <Layout>
            <div className='containerBackground'>
                <Header />

                <div className={styles.container}>
                    <div className={titlePage.titlePage}>
                        <img src='/img/icons/medicine.png' />
                        Remédios | Segunda
                    </div>

                    <div className={styles.medicinesOnDay}>
                        <h3>Remédios</h3>

                        <div className={`${styles.medicines} ${animate.upSlow}`}>

                            <div className={animate.upMoreSlow}>
                                <p>12:15</p>
                                <hr></hr>
                                <p>Dipirona</p>
                                <button><img src='img/icons/delete.jpg' /></button>
                            </div>

                            <div className={animate.upMoreSlow}>
                                <p>14:15</p>
                                <hr></hr>
                                <p>Buscopam</p>
                                <button><img src='img/icons/delete.jpg' /></button>

                            </div>

                            <div className={animate.upMoreSlow}>
                                <p>12:15</p>
                                <hr></hr>
                                <p>Dorflex</p>
                                <button><img src='img/icons/delete.jpg' /></button>

                            </div>

                            <div className={animate.upMoreSlow}>
                                <p>12:15</p>
                                <hr></hr>
                                <p>Biotônico</p>
                                <button><img src='img/icons/delete.jpg' /></button>

                            </div>

                            <div className={animate.upMoreSlow}>
                                <p>12:15</p>
                                <hr></hr>
                                <p>Paracetamolsds</p>
                                <button><img src='img/icons/delete.jpg' /></button>

                            </div>
                        </div>
                    </div>
                    
                    <a href="#">
                        <div className={styles.addMedicine}>
                            <img src='/img/icons/add.png' />
                        </div>
                    </a>

                </div>
            </div>
        </Layout >
    );
};

export default MedicineDay;