import React, { useState } from "react";
import Layout from "../Layout/Layout";
import titlePage from '../styles/Components/titlePage.module.css';
import styles from '../styles/pages/Medicine.module.css';
import animate from '../styles/animation/animation.module.css';
import Header from "../Components/header";

const Medicine = () => {
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
                        Remédios
                    </div>

                    <div className={styles.emergencyContainer}>


                            <div className={`${styles.emergencyItem} ${animate.upMoreSlow}`}>
                                <h3>Domingo</h3>

                                <a href='#'>
                                    <img src='/img/icons/seeMore.png'/>
                                </a>

                            
                                {/* Código irá diminuir com a função map */}
                                <div className={styles.medicines}>
                                
                                    <div>
                                        <p>12:15</p>
                                        <hr></hr>
                                        <p>Dipirona</p>
                                    </div>

                                    <div>
                                        <p>14:15</p>
                                        <hr></hr>
                                        <p>Buscopam</p>
                                    </div>

                                    <div>
                                        <p>12:15</p>
                                        <hr></hr>
                                        <p>Dorflex</p>
                                    </div>

                                    <div>
                                        <p>12:15</p>
                                        <hr></hr>
                                        <p>Biotônico</p>
                                    </div>

                                    <div>
                                        <p>12:15</p>
                                        <hr></hr>
                                        <p>Paracetamolsds</p>
                                    </div>
                                </div>

                            </div>

                            <div className={`${styles.emergencyItem} ${animate.up}`}>
                                <h3>Segunda</h3>

                                <div className={styles.noMedicines}>
                                    <img src='img/icons/noMedicines.png'/>
                                    <h2>Sem remédios hoje :)</h2>
                                </div>
                            </div>

                            <div className={`${styles.emergencyItem} ${animate.upSlow}`}>
                                <h3>Terça</h3>
                            </div>

                            <div className={`${styles.emergencyItem} ${animate.upMoreSlow}`}>
                                <h3>Quarta</h3>
                            </div>

                            <div className={`${styles.emergencyItem} ${animate.upMoreSlow}`}>
                                <h3>Quinta</h3>
                            </div>

                            <div className={`${styles.emergencyItem} ${animate.upMoreSlow}`}>
                                <h3>Sexta</h3>
                            </div>

                            <div className={`${styles.emergencyItem} ${animate.upMoreSlow}`}>
                                <h3>Sábado</h3>
                            </div>


                    </div>

                </div>

            </div>
        </Layout >
    );
};

export default Medicine;