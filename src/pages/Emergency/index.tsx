import Head from "next/Head";
import React from "react";
import Header from "../../Components/Header";
import animate from '../../styles/animation.module.scss';
import styles from './styles.module.scss';

const Emergency = () => {

    return (
        <div id='themeBackground'>

            <Head>
                <title>Emergência | Saúde em Mãos</title>
            </Head>

            <div className={styles.container}>
                <Header />

                <div className={styles.emergencyGrid}>
                    <div className={`${styles.emergencyItem} ${animate.up}`}>
                        <div>
                            <img src='/img/icons/copBanner.jpg' />
                            <img src='img/icons/cop.png' />
                        </div>
                        <p>Polícia - 190</p>
                    </div>

                    <div className={`${styles.emergencyItem} ${animate.upSlow}`}>
                        <div>
                            <img src='/img/icons/firemanBanner.jpg' />
                            <img src='img/icons/fireman.png' />
                        </div>
                        <p>Bombeiro - 193</p>
                    </div>

                    <div className={`${styles.emergencyItem} ${animate.upMoreSlow}`}>
                        <div>
                            <img src='/img/icons/ambulanceBanner.jpg' />
                            <img src='img/icons/ambulance.png' />
                        </div>
                        <p>Ambulância - 192</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emergency;