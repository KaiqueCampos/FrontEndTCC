import React, { useState } from "react";
import Header from "../Components/header";
import Layout from "../Layout/Layout";
import styles from '../styles/pages/Emergency.module.css';
import animate from '../styles/animation/animation.module.css';
import titlePage from '../styles/Components/titlePage.module.css';


const Emergency = () => {

    return (
        <Layout>
            <div className='containerBackground'>
                <Header />

                <div className={styles.container}>
                    <div className={titlePage.titlePage}>
                        <img src='/img/icons/emergency.png' />
                        Emergência
                    </div>

                    <div className={styles.emergencyGrid}>
                        <div className={`${styles.emergencyItem} ${animate.up}`}>
                            <img src='img/icons/cop.png' />
                        Polícia
                        </div>

                        <div className={`${styles.emergencyItem} ${animate.upSlow}`}>
                            <img src='img/icons/fireman.png' />
                        Bombeiro
                         </div>

                        <div className={`${styles.emergencyItem} ${animate.upMoreSlow}`}>
                            <img src='img/icons/ambulance.png' />
                        Ambulância
                        </div>
                    </div>

                </div>

            </div>
        </Layout >
    );
};

export default Emergency;