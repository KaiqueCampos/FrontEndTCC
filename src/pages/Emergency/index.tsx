import React from "react";
import Header from "../../Components/Header";
import animate from '../../styles/animation.module.scss';
import styles from './styles.module.scss';

const Emergency = () => {

    return (
        <div id='themeBackground'>
            <div className={styles.container}>
                <Header />

                <div className={styles.emergencyGrid}>
                    <div className={`${styles.emergencyItem} ${animate.up}`}>
                        <div>
                            <img src='/img/icons/copBanner.jpg' />
                            <img src='img/icons/cop.png' />
                        </div>
                        <p>Polícia</p>
                    </div>

                    <div className={`${styles.emergencyItem} ${animate.upSlow}`}>
                        <div>
                            <img src='/img/icons/firemanBanner.jpg' />
                            <img src='img/icons/fireman.png' />
                        </div>
                        <p>Bombeiro</p>
                    </div>

                    <div className={`${styles.emergencyItem} ${animate.upMoreSlow}`}>
                        <div>
                            <img src='/img/icons/ambulanceBanner.jpg' />
                            <img src='img/icons/ambulance.png' />
                        </div>
                        <p>Ambulância</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emergency;