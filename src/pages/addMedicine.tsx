import React, { useState } from "react";
import Layout from "../Layout/Layout";
import titlePage from '../styles/Components/titlePage.module.css';
import styles from '../styles/pages/addMedicine.module.css';
import animate from '../styles/animation/animation.module.css';
import Head from "next/head";
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
        <>
            <Head>
                <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
            </Head>

            <Layout>
                <div className='containerBackground'>
                    <Header />

                    <div className={styles.container}>
                        <div className={titlePage.titlePage}>
                            <img src='/img/icons/medicine.png' />
                        Adicionar Remédio
                    </div>

                        <form className={styles.addMedicine}>
                            <div className={`${styles.hoursContainer} ${animate.up}`}>
                                <div>
                                    <p>00:00</p>
                                    <hr></hr>
                                    <p>08:00</p>
                                    <hr></hr>
                                    <p>08:00</p>
                                </div>

                                <button>
                                    <img src='img/icons/add.png' />
                                </button>
                            </div>

                            <div className={`${styles.repeat} ${animate.up}`}>
                                <div className={styles.repeatCheckbox}>
                                    <input type='checkbox' />
                                    <h3 className={styles.legend}>Repetir</h3>
                                </div>

                                <div className={styles.daysWeek}>
                                    <button>D</button>
                                    <button>S</button>
                                    <button>T</button>
                                    <button>Q</button>
                                    <button>Q</button>
                                    <button>S</button>
                                    <button>S</button>
                                </div>
                            </div>

                            <div className={`${styles.specificDate} ${animate.upSlow}`}>
                                <h3 className={styles.legend}>Data Específica</h3>
                                <button>
                                    <div></div>
                                </button>
                            </div>

                            <div className={`${styles.date} ${animate.upSlow}`}>
                                <input
                                    type="date"
                                    name='initialDate'
                                    placeholder='Data de início:'
                                />

                                <input
                                    type="date"
                                    name='finalDate'
                                    placeholder='Data de Término:'
                                />
                            </div>

                            <input
                                className={animate.upSlow}
                                type='text'
                                name='medicineName'
                                placeholder='Nome do Remédio:'
                            />

                            <button type='submit' className={`${styles.submitButton} ${animate.upMoreSlow}`}>
                                <img src='/img/icons/add.png' />
                            Adicionar novo remédio
                            </button>

                        </form>
                    </div>
                </div>
            </Layout >
        </>
    );
};

export default Medicine;