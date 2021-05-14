import React, { useState } from "react";
import Header from "../Components/Header/header";
import styles from '../styles/pages/Emergency.module.scss';
import animate from '../styles/animation/animation.module.css';


const Emergency = () => {

    return (
        <div className='container1'>
            <div className='main'>
                <Header />

                <div className={styles.container}>

                    <div className={styles.emergencyGrid}>
                        <div className={`${styles.emergencyItem} ${animate.up}`}>
                            <div>
                                <img src='https://image.winudf.com/v2/image1/Y29tLmppbGwuQ2FyLlBvbGljZS5GYXN0LkZhc3RQb2xpY2VDYXJzV2FsbHBhcGVyX3NjcmVlbl8xXzE1NDc3NTU5NDBfMDE5/screen-1.jpg?fakeurl=1&type=.jpg'/>
                                <img src='img/icons/cop.png' />
                            </div>
                            <p>Polícia</p>
                        </div>

                        <div className={`${styles.emergencyItem} ${animate.upSlow}`}>
                            <div>
                                <img src='https://i.pinimg.com/originals/9d/00/4c/9d004c4684b26aba130db93b7fefb257.jpg'/>
                                <img src='img/icons/fireman.png' />
                            </div>
                            <p>Bombeiro</p>
                        </div>

                        <div className={`${styles.emergencyItem} ${animate.upMoreSlow}`}>
                            <div>
                                <img src='https://media.istockphoto.com/photos/ambulance-picture-id1185364077?k=6&m=1185364077&s=612x612&w=0&h=g4gwtNWzSAGOu7q3ZLshPKj_xdQGzbK1werpc-FbY7Y='/>
                                <img src='img/icons/ambulance.png' />
                            </div>
                            <p>Ambulância</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Emergency;