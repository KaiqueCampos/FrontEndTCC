import React, { useState } from "react";
import Header from "../../Components/Header";
import styles from './styles.module.scss';
import animate from '../styles/animation.module.scss';


const Help = () => {

    return (
        <div id='container1'>
            <div className="main">
                <Header />

                <div className={styles.container}>

                    <div className='titlePage'>
                        <img src='/img/icons/help.png' />
                        Ajuda
                    </div>

                    <div className={styles.helpItems}>
                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Help;